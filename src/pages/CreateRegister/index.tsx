import { ReactNode } from 'react';

interface CreateRegisterProps {
  children: ReactNode;
}

function CreateRegister({ children }: CreateRegisterProps) {
  return (
    <>
      <h1>CreateRegister</h1>
      {children}
    </>
  );
}

export default CreateRegister;
