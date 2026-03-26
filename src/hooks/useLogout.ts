import { signOut } from "next-auth/react";

export function useLogout() {
  function logOutHandler() {
    signOut({ callbackUrl: "/" });
  }

  return { logOutHandler };
}
