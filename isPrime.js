const isPrime = (num) => {
  // Проверяем, что число не равно 1, 0 или отрицательному.
  if (num <= 1) {
    console.log("Это число меньше или равно единице");
    return false;
  }
  // Проходим по всем числам до корня из числа
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    // Если число делится на i, выходим из цикла
    if (num % i === 0) {
      console.log("Это не простое число");
      return false;
    }
  }
  console.log("Это простое число");
  return true;
};

console.log(isPrime());
