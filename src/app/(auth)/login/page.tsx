"use client";
import { loginPayloadType, loginSchema } from "@/app/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { defaultValues } from "@/app/schemas/login.schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { handleSubmit, control } = useForm<loginPayloadType>({
    defaultValues,
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  async function onSubmit(formValues: loginPayloadType) {

    // fetch
    // const data = await loginHandler(formValues)
    // console.log(data);
    // if (data.message==="success") {
    //   alert("welcome back")
    // } else {
    //   alert(data.error)
    // }
    
  const resp = await  signIn("credentials",{...formValues,redirect:false,callbackUrl:"/"})
    console.log(resp);
    if (resp?.ok) {
      toast.success("welcome back")
      router.push("/")
    }
    else {
      toast.error(resp?.error)
    }
  
  }
  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* email */}

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
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
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button type="submit">Login</Button>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
}
