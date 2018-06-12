registerPaint('checkerboard', class {
  paint(ctx, geom, _props) {
    const colors = ['#ff5752', '#38aed7', '#ffffff'];
    const size = 32;
    for (let y = 0; y < geom.height / size; y += 1) {
      for (let x = 0; x < geom.width / size; x += 1) {
        const c = colors[(x + y) % colors.length];
        ctx.beginPath();
        ctx.fillStyle = c;
        ctx.rect(x * size, y * size, size, size);
        ctx.fill();
      }
    }
  }
});
