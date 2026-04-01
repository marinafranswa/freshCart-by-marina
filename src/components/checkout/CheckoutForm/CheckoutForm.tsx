"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  addressPayloadType,
  addressSchema,
  defaultValues,
} from "@/app/schemas/address.schema";
import { createOrder } from "@/actions/orders.actions";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { Label } from "@/components/ui/label";

interface CheckoutFormProps {
  cartId: string;
}

export default function CheckoutForm({ cartId }: CheckoutFormProps) {
  const { updateNumOfCartItems } = useCart();
  const router = useRouter();
  const { handleSubmit, control, getValues } = useForm<addressPayloadType>({
    defaultValues,
    resolver: zodResolver(addressSchema),
    mode: "onChange",
  });

  async function onSubmit(formValues: addressPayloadType) {
    const resp = await createOrder(cartId, formValues);
    if (resp.status) {
      if (getValues("paymentMethod") === "cash") {
        toast.success(resp.message, { duration: 3000 });
        router.push("/allorders");
        updateNumOfCartItems(0);
      } else {
        open(resp.session.url, "_self");
      }
    } else {
      toast.error(resp.error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        {/* details */}
        <Controller
          name="details"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Details</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your Full Details"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* city */}

        <Controller
          name="city"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>City</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your City"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* postalCode */}
        <Controller
          name="postalCode"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Postal Code</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your postalCode"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* phone */}

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your Egyptian Phone"
                autoComplete="off"
                type="tel"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* payment method */}

        <Controller
          name="paymentMethod"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <RadioGroup
                name={field.name}
                value={field.value}
                onValueChange={field.onChange}
              >
                <FieldLabel key={"cash"} htmlFor={`cash`}>
                  <Field
                    orientation="horizontal"
                    data-invalid={fieldState.invalid}
                  >
                    <RadioGroupItem
                      value={"cash"}
                      id={`cash`}
                      aria-invalid={fieldState.invalid}
                    />
                    <Label htmlFor="cash">Cash</Label>
                  </Field>
                </FieldLabel>
                <FieldLabel key={"card"} htmlFor={`card`}>
                  <Field
                    orientation="horizontal"
                    data-invalid={fieldState.invalid}
                  >
                    <RadioGroupItem
                      value={"card"}
                      id={`card`}
                      aria-invalid={fieldState.invalid}
                    />
                    <Label htmlFor="card">Card</Label>
                  </Field>
                </FieldLabel>
              </RadioGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
        <Button
          className="w-full bg-green-600 text-white py-6 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          checkout
        </Button>
      </FieldGroup>
    </form>
  );
}
