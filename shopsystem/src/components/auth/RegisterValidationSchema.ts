
import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
  email: yup
  .string()
  .required("E-Mail wird benötigt!")
  .trim()
  .email("Das ist keine gültige E-Mail Adresse!"),
  password: yup
  .string()
  .required("Passwort wird benötigt!")
  .trim()
  .min(6,"Das Passwort muss mindestens 6 Zeichen Lang sein!"),
  confirmPassword: yup
  .string()
  .required("Passwort bitte wiederholen!")
  .trim()
  .oneOf([yup.ref("password")],"Passwörter stimmen nicht überein!"),
});

export const loginValidationSchema = yup.object().shape({
  email: yup
  .string()
  .required("E-Mail wird benötigt!")
  .trim()
  .email("Das ist keine gültige E-Mail Adresse!"),
  password: yup
  .string()
  .required("Passwort wird benötigt!")
  .trim()
  .min(6,"Das Passwort muss mindestens 6 Zeichen Lang sein!"),
});
