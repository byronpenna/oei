import { validationMessages } from "@/shared/constants";
import { stringField } from "@/shared/utils/funtions";
import { regex } from "@/shared/types/regex-validation";
import { object, ObjectSchema, ref } from "yup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyCodeSchema: ObjectSchema<any> = object({
  verifyCode: stringField("Código OPT inválido")
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const changePasswordSchema: ObjectSchema<any> = object({
  currentPassword: stringField(validationMessages.required),
  newPassword: stringField(validationMessages.required)
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      regex.password,
      "La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial"
    ),
  confirmNewPassword: stringField(validationMessages.required).oneOf(
    [ref("newPassword")],
    "Las contraseñas no coinciden"
  )
});
