import { object, ObjectSchema } from "yup";
import { validationMessages } from "@/shared/constants";
import { stringField } from "@/shared/utils/funtions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const attachment1Schema: ObjectSchema<any> = object({
  startDate: stringField(validationMessages.required),
  finishDate: stringField(validationMessages.required),
  frequencyOfEncounters: stringField(validationMessages.required),
  teacherSignature: stringField(validationMessages.required),
  mentorSignature: stringField(validationMessages.required),

});

