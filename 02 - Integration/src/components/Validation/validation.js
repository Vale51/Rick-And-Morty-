// validation.js

export const validateForm = (userData) => {
    let errors = {};
  
    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email) {
      errors.email = 'El email no puede estar vacío.';
    } else if (!emailRegex.test(userData.email)) {
      errors.email = 'El email debe ser válido.';
    } else if (userData.email.length > 35) {
      errors.email = 'El email no puede tener más de 35 caracteres.';
    }
  
    // Validación de la contraseña
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    if (!userData.password) {
      errors.password = 'La contraseña no puede estar vacía.';
    } else if (!passwordRegex.test(userData.password)) {
      errors.password = 'La contraseña debe tener al menos un número y una longitud entre 6 y 10 caracteres.';
    }
  
    return errors;
  };
  