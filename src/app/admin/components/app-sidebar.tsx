"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { User, LogOut, Settings, User2 } from "lucide-react";

const links = [
  {
    title: "Users",
    url: "/admin/users",
    icon: User2,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      className=" pb-[100px] z-50 pt-5 px-0 bg-white border-r border-[#f0ecec]"
    >
      <SidebarContent className="px-0 bg-white">
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="pl-7 mb-[30px]">
            <Link href="https://www.analogueshifts.com">
              <Image
                className="block  h-[25px] w-max"
                src="/nav-logo.svg"
                width={200}
                height={36}
                alt="Logo"
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="bg-white">
            <SidebarMenu>
              {links.map((item) => (
                <SidebarMenuItem
                  className={`${
                    item.url === pathname
                      ? "text-[#ffbb0a] "
                      : "text-[#8b8e91] hover:text-[#ffbb0a] "
                  } duration-300 py-2 px-5`}
                  key={item.title}
                >
                  <SidebarMenuButton
                    className="hover:bg-transparent  hover:text-[#ffbb0a]"
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon className="w-3.5 h-3.5" />
                      <span className="text-sm font-normal">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className=" bg-white">
        <SidebarGroupLabel>
          <SidebarMenuButton
            className="hover:bg-transparent hover:text-[#ffbb0a]"
            asChild
          >
            <a onClick={logout} href={"#"}>
              <LogOut className="w-3.5 h-3.5" />
              <span className="text-sm font-normal">Log out</span>
            </a>
          </SidebarMenuButton>
        </SidebarGroupLabel>
      </SidebarFooter>
    </Sidebar>
  );
}
