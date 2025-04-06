import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
