import type React from "react";
import MainLayout from "@/components/layout/main-layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Forgot Password | Hunger Express Peshawar",
  description: "Reset your Hunger Express account password",
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
