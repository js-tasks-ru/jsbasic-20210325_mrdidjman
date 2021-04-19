function factorial(n) {
  let i=0;
  let fact=1;
  while (i<(n+1)) {
    if ((i === 0 ) || (i === 1)) {
      i++;
    } else {
      fact=fact*i;
      i++;
    }
  }
  return fact;
}
