  if (num < 10) {
    return num;
  }
  let Sum = 0;
  while (num > 0) {
    Sum += num % 10;
    num = Math.floor(num / 10);
  }


    return getValue(Sum);