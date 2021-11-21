const regProp = 'registerProperty';
const paintWork = 'paintWorklet';

export const houdiniSupported = (): boolean => 'registerProperty' in CSS && 'paintWorklet' in CSS;

export const registerProperty = (property: HoudiniProperty): void => {
  CSS[regProp](property);
};

export const paintWorklet = (worklet: Blob): void => {
  CSS[paintWork].addModule(URL.createObjectURL(worklet));
};

/**
 *
 * @description
 * `paint` is a function body which has to be supplied as a string.
 * The paint function has the following signature:
 * ```
 * paint(
 *   ctx: CanvasRenderingContext2D,
 *   size: { width: number, height: number },
 *   properties: HoudiniProperty[]
 * )
 * ```
 */
export const buildWorklet = (
  properties: HoudiniProperty[],
  paint: string,
): Blob => {
  let props = '';

  properties.forEach((property) => {
    registerProperty(property);

    props += `'${property.name}',`;
  });

  return new Blob([`
    if (registerPaint) {
      registerPaint('cross', class {
        static get inputProperties() {
          return [
            ${props}
          ];
        }

        paint(ctx, size, properties) {
          ${paint.trim()}
        };
      });
    }
  `], {
    type: 'application/javascript',
  });
};

export const buildAndPaintWorklet = (properties: HoudiniProperty[], paint: string): void => {
  if (!houdiniSupported()) {
    return;
  }

  try {
    paintWorklet(buildWorklet(properties, paint));
  } catch (e) {
    //
  }
};
