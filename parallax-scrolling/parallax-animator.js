registerAnimator('parallax', class {
  animate(currentTime, effect) {
    effect.localTime = 200 * currentTime;
  }
});
