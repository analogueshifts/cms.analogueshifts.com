"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { redirect } from "next/navigation";
export default function Layout({ children }: { children: React.ReactNode }) {
  const token = Cookies.get("analogueshiftsCmsToken");

  useEffect(() => {
    if (!token) {
      redirect("/");
    }
  }, [token]);

  return (
    <SidebarProvider className="bg-white w-full">
      <AppSidebar />
      <main className="bg-white w-full px-5">
        <div className="w-full z-40 h-14 bg-white sticky top-0 flex justify-between items-center">
          <SidebarTrigger className="text-[#8b8e91] hover:text-[#8b8e91]" />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
