function fibonacci(n) {
  const fibonaccis = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonaccis.push(fibonaccis[i - 2] + fibonaccis[i - 1]);
  }
  return fibonaccis[n];
}
  console.log(fibonacci(15)); // Debería imprimir 8