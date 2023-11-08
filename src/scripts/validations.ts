export function validateEmail(email: string): boolean {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  return passwordRegex.test(password);
}

export function validateBlankField(field: string): boolean {
  let blankFieldRegex = /^\s*$/;
  return blankFieldRegex.test(field);
}