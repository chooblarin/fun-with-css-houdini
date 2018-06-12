registerPaint('checkerboard', class {

  static get inputProperties() {
    return ['--checkerboard-spacing', '--checkerboard-size'];
  }

  paint(ctx, geom, properties) {
    const sizeProp = properties.get('--checkerboard-size');
    const spacingProp = properties.get('--checkerboard-spacing');

    // As of now, mostly wrappers around strings,
    const size = parseInt(sizeProp.toString());
    const spacing = parseInt(spacingProp.toString());

    const colors = ['#ff5752', '#38aed7'];

    for (let y = 0; y < geom.height / size; y += 1) {
      for (let x = 0; x < geom.width / size; x += 1) {
        const c = colors[(x + y) % colors.length];
        ctx.beginPath();
        ctx.fillStyle = c;
        ctx.rect(x * (size + spacing), y * (size + spacing), size, size);
        ctx.fill();
      }
    }
  }
});
