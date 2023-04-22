export const validatePassword = (password: string) => {
  return !(String(password)
    .toLowerCase()
    .match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    ) == null)
};
