import * as z from "zod";


enum paymentMethod{
  CASH = "cash",
  CARD="card"
}

export const defaultValues = {
  details: "",
  phone: "",
  city: "",
  postalCode: "",
  paymentMethod: paymentMethod.CASH,
};

export const addressSchema = z.object({
  details: z.string().nonempty({ error: "details is required" }),
  city: z.string().nonempty({ error: "city is required" }),
  postalCode: z.string().nonempty({ error: "postalCode is required" }),
  phone: z
    .string({ error: "Invalid confirm Password" })
    .regex(/^(002)?01[0125][0-9]{8}$/),
  paymentMethod:z.enum(["cash","card"],{error:"payment method is required"})
});
 

export type addressPayloadType = z.infer<typeof addressSchema>;
