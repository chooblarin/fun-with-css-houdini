registerPaint('hello-circle', class {
  paint(context, geometory, _properties, _args) {
    context.fillStyle = 'red';
    const centerX = geometory.width / 2;
    const centerY = geometory.height / 2;
    const radius = 250;
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.fill();
  }
});
