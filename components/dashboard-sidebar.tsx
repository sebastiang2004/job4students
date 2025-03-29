"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { User, Briefcase, BookOpen, Bell, MessageSquare, Settings, LogOut } from "lucide-react"

interface DashboardSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardSidebar({ className, ...props }: DashboardSidebarProps) {
  const pathname = usePathname()

  const navigation = [
    { name: "Profile", href: "/dashboard", icon: User },
    { name: "Applications", href: "/dashboard/applications", icon: Briefcase },
    { name: "Saved Jobs", href: "/dashboard/saved", icon: BookOpen },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <aside className={`space-y-4 ${className}`} {...props}>
      <div className="space-y-2">
        {navigation.map((item) => (
          <Button
            key={item.name}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          </Button>
        ))}
      </div>
      <div className="pt-4 border-t">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  )
}

