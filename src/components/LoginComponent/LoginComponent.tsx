"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  loginPayloadType,
  loginSchema,
  defaultValues,
} from "@/app/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";


export default function LoginComponent() {
  const router = useRouter();
  const { handleSubmit, control } = useForm<loginPayloadType>({
    defaultValues,
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  async function onSubmit(formValues: loginPayloadType) {
    const resp = await signIn("credentials", {
      ...formValues,
      redirect: false,
      callbackUrl: "/",
    });
    if (resp?.ok) {
      toast.success("welcome back");
      router.push("/");
    } else {
      toast.error(resp?.error);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        {/* email */}

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* password */}

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your Password"
                autoComplete="off"
                type="password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button
          className="w-full bg-green-600 text-white py-6 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          Sign In
        </Button>
      </FieldGroup>
    </form>
  );
}
