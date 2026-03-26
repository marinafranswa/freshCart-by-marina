import * as z from "zod";

export const defaultValues = {
  email: "",
  name:"",
  password: "",
  rePassword: "",
  phone:""
};

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty({ error: "Name is required" })
      .min(3, { error: "Name must be at least 3 characters" })
      .max(15, { error: "Name must be at most 15 characters" }),
    email: z.email({ error: "Invalid email" }),
    password: z
      .string()
      .nonempty({ error: "Required Password" })
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Invalid Password",
      ),
    rePassword: z
      .string()
      .nonempty({ error: "Required Password" })
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Invalid Password",
      ),
    phone: z
      .string({ error: "Invalid confirm Password" })
      .regex(/^(002)?01[0125][0-9]{8}$/),
  })
  .refine(
    (data) => {
      if (data.password === data.rePassword) {
        return true;
      }
      return false;
    },
    { error: "passwords are not matched", path: ["rePassword"] },
  );

export type registerPayloadType = z.infer<typeof registerSchema>;
