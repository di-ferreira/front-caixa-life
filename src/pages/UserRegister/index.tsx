import { ReactNode } from "react";

interface UserRegisterProps {
  children?: ReactNode;
}

function UserRegister({ children }: UserRegisterProps) {
  return (
    <>
      <h1>UserRegister</h1>
      {children}
    </>
  );
}

export default UserRegister;
