import customProperties from '../../scss/variables/custom-properties.module.scss';
import scssVars from '$lib/util/scss-vars';

export default (): void => {
  const root = document.querySelector('html');
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));
  const fsScaleMinWidth = (scssVars.fsScaleMinWidth || 375) / pixelsPerRem;
  const fsScaleMaxWidth = (scssVars.fsScaleMaxWidth || 1280) / pixelsPerRem;

  const buildClamp = (minFontSize: number, maxFontSize: number) => {
    const slope = (maxFontSize - minFontSize) / (fsScaleMaxWidth - fsScaleMinWidth);
    const yAxisIntersection = -fsScaleMinWidth * slope + minFontSize;

    return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem)`;
  };

  const buildFontProperties = (identifier: 'fs' | 'lh'): string => Object
    .entries(scssVars[identifier])
    .map(([bp, { min, max }]) => `  --${identifier}-${bp}: ${buildClamp(min, max)};`)
    .join(' ');

  const createStyleTag = (): HTMLStyleElement => {
    const fontProperties = document.createElement('style');

    fontProperties.setAttribute('type', 'text/css');

    let css = Object
      .entries(customProperties)
      .reduce((string, [key, value]) => `${string}${key}: ${value};`, '');

    css = `:root, *::before, *::after {${css}${buildFontProperties('fs')}${buildFontProperties('lh')}}`;

    fontProperties.innerHTML = css
      .replace(/\s\s+/g, ' ')
      .replace(/\n+/g, ' ');

    return fontProperties;
  };

  document.head.appendChild(createStyleTag());
};
