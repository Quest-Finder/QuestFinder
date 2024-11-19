export const PASSWORD_MIN_LENGTH = 6

/*
  (?=.*\d)    should contain at least 1 digit
  (?=.*[a-z]) should contain at least 1 lowercase letter
  (?=.*[A-Z]) should contain at least 1 uppercase letter
  (?=.*\W)    should contain at least 1 special character
  (?!.*\s)    should not contain any blank space
*/
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/
