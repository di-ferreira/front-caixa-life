import { ReactNode } from "react";

interface ListRegistersProps {
  children?: ReactNode;
}

function ListRegisters({ children }: ListRegistersProps) {
  return (
    <>
      <h1>ListRegisters</h1>
      {children}
    </>
  );
}

export default ListRegisters;
