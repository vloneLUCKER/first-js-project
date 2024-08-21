function validatePIN(sin) {
  let pin = "1" + sin;
  if (
    Number(pin) &&
    ((Number(pin) > 9999 && Number(pin) < 100000) ||
      (Number(pin) > 999999 && Number(pin) < 10000000)) &&
    Number(pin) % 1 === 0
  ) {
    return true;
  }
  return false;
}

console.log(validatePIN("1234"));
