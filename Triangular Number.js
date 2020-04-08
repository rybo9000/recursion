function trinum(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + trinum(n - 1);
  }
}

trinum(6);
