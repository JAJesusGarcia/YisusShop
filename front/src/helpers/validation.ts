export const validateEmail = (email: string): string => {
  let validation = "";
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(email)) validation = "Invalid email";
  return validation;
};

export const validatePassword = (password: string): string => {
  console.log("Password ingresada:", password); // Debug
  let validation = "";
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>\/?]{8,}$/;

  if (!regexPassword.test(password)) {
    console.log("Contraseña inválida"); // Debug
    validation = "Invalid password";
  } else {
    console.log("Contraseña válida"); // Debug
  }
  return validation;
};

export const validateAddress = (address: string) => {
  let validation = "";
  const regexAddress = /^[a-zA-Z0-9\s,'-]+$/;
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
  const regexName = /^[a-zA-Z\s]+$/;
  if (!regexName.test(name)) validation = "Invalid name";
  return validation;
};
