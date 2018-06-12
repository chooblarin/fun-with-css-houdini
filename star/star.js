registerPaint('star', class {
  static get inputProperties() { return ['--radius', '--point-num']; }

  paint(ctx, geom, properties) {
    const radius = parseInt(properties.get('--radius').toString());
    const pointNum = parseInt(properties.get('--point-num').toString());

    const n = pointNum * 2;
    const angle = 2 * Math.PI / n;

    const startX = geom.width / 2;
    const startY = geom.height / 2;

    ctx.moveTo(startX, startY);
    ctx.beginPath();
    ctx.fillStyle = 'black';

    for (let i = 0; i < n; i += 1) {
      const r = radius * (i % 2 + 1) / 2;
      const theta = angle * i + Math.PI / 2;
      const x = r * Math.cos(theta) + startX;
      const y = r * Math.sin(theta) + startY;
      ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
  }
});
