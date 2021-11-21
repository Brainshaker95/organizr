import { buildAndPaintWorklet } from './util';

export default (): void => buildAndPaintWorklet(
  [{
    name: '--cross-color',
    syntax: '<color>',
    inherits: true,
    initialValue: 'black',
  }, {
    name: '--cross-width',
    syntax: '<number>',
    inherits: false,
    initialValue: 1,
  }],
  `
  const lineWidth = properties.get('--cross-width');
  const verticalStart = (size.height - lineWidth) * 0.99 + lineWidth;

  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = properties.get('--cross-color');

  ctx.beginPath();
  ctx.moveTo(lineWidth, lineWidth);
  ctx.lineTo(size.width - lineWidth, verticalStart);
  ctx.moveTo(size.width - lineWidth, lineWidth);
  ctx.lineTo(lineWidth, verticalStart + size.height);
  ctx.stroke();
  `,
);
