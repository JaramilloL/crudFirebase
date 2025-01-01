export const errorsLogin = [
  {
    code: "auth/invalid-email",
    message: "El correo no tiene un formato válido.",
  },
  {
    code: "auth/invalid-credential",
    message: "Las credenciales no son válidas.",
  },
  { code: "auth/user-disabled", message: "La cuenta está deshabilitada." },
  {
    code: "auth/user-not-found",
    message: "No existe una cuenta con este correo.",
  },
  { code: "auth/wrong-password", message: "La contraseña es incorrecta." },
  {
    code: "auth/too-many-requests",
    message: "Demasiados intentos fallidos. Inténtalo más tarde.",
  },
];

export const errorsGoogleLogin = [
  {
    code: "auth/popup-closed-by-user",
    message:
      "La ventana emergente fue cerrada antes de completar el inicio de sesión.",
  },
  {
    code: "auth/cancelled-popup-request",
    message:
      "Otra ventana emergente de inicio de sesión fue abierta. Por favor, inténtalo de nuevo.",
  },
  {
    code: "auth/popup-blocked",
    message:
      "El navegador bloqueó la ventana emergente. Asegúrate de que las ventanas emergentes estén habilitadas.",
  },
  {
    code: "auth/invalid-credential",
    message:
      "Las credenciales de inicio de sesión son inválidas o han expirado.",
  },
  {
    code: "auth/network-request-failed",
    message:
      "Hubo un problema con la conexión de red. Revisa tu conexión e inténtalo de nuevo.",
  },
];

export const errorsRegister = [
  {
    code: "auth/email-already-in-use",
    message:
      "El correo ya está registrado. Por favor, usa otro correo o inicia sesión.",
  },
  {
    code: "auth/invalid-email",
    message:
      "El correo proporcionado no es válido. Por favor, revisa e inténtalo de nuevo.",
  },
  {
    code: "auth/operation-not-allowed",
    message:
      "El registro con correo y contraseña no está habilitado. Contacta al administrador.",
  },
  {
    code: "auth/weak-password",
    message:
      "La contraseña es demasiado débil. Debe contener al menos 6 caracteres.",
  },
  {
    code: "auth/network-request-failed",
    message:
      "Hubo un problema con la conexión de red. Revisa tu conexión e inténtalo de nuevo.",
  },
];
