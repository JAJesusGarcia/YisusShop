export const validateEmail = (email: string): string => {
  let validation = "";
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(email)) validation = "Invalid email";
  return validation;
};

export const validatePassword = (password: string): string => {
  if (!password) return "Password is required";

  const regexPassword =
    /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])[A-Za-zñÑ\d!@#$%^&*()_+[\]{};':"\\|,.<>/?]{8,}$/;

  if (!regexPassword.test(password)) {
    return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character. You can use 'ñ' and 'Ñ'.";
  }

  return "";
};

export const validateAddress = (address: string) => {
  let validation = "";
  const regexAddress = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ,'-]+$/;
  if (!regexAddress.test(address)) validation = "Invalid address";
  return validation;
};

export const validatePhone = (phone: string) => {
  let validation = "";
  const regexPhone = /^\d{10}$/;
  if (!regexPhone.test(phone)) validation = "Invalid phone";
  return validation;
};

export const validateName = (name: string) => {
  let validation = "";
  const regexName = /^[a-zA-ZñÑ\s]+$/;
  if (!regexName.test(name)) validation = "Invalid name";
  return validation;
};
