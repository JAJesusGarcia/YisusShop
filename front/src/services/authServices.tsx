import { ILoginForm, IRegisterFormData } from "@/interfaces/forms";

export const loginService = async (url: string, data: ILoginForm) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const registerService = async (url: string, data: IRegisterFormData) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const checkEmailExists = async (
  url: string,
  formData: IRegisterFormData,
) => {
  try {
    const response = await fetch(`${url}/users/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email }),
    });

    if (!response.ok) {
      throw new Error("Error al verificar el correo electrónico");
    }

    const data = await response.json();
    return data.exists;
  } catch (error) {
    console.error("Error al verificar el correo electrónico:", error);
    throw error;
  }
};
