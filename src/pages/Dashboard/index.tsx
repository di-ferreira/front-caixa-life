import { ReactNode } from "react";
import NavBar from "../../components/NavBar";

interface DashboardProps {
  children?: ReactNode;
}

function Dashboard({ children }: DashboardProps) {
  return (
    <>
      <NavBar />
      <h1>Dashboard</h1>
      {children}
    </>
  );
}

export default Dashboard;
