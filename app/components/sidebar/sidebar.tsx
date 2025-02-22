// FULL CODE SNIPPET
// File: SidebarWrapper.tsx

"use client";

import React from "react";
import Image from "next/image"; // <-- Import Next.js Image
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import {
  HomeIcon,
  TasksIcon,
  KanbanIcon,
  AiToolsIcon,
  CalendarIcon,
  IntegrationsIcon,
} from "../icons/sidebar/sidebar-icons";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { FilterIcon } from "../icons/sidebar/filter-icon";

import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { CollapseItems } from "./collapse-items";

import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";

import Logo from "../../../public/img/logo.png";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  // Helper to check active route
  const isActive = (route: string) => route === pathname;

  return (
    <aside className="md:sticky md:top-0 md:h-screen z-[202]">
      {/* Overlay for mobile */}
      {collapsed && (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      )}

      {/* Sidebar main container */}
      <div className={Sidebar({ collapsed })}>
        {/* Header */}
        <div className={Sidebar.Header()}>
          {/* Next.js Image instead of <img> */}
          <Image
            src={Logo}
            alt="Task Titan Logo"
            width={64}
            height={64}
            className="mr-2 object-contain  rounded-lg"
            priority // (Optional) to hint that it’s important for LCP
          />
          <h1 className="font-bold text-white text-xl">Task Titan</h1>
        </div>

        {/* Body */}
        <div className={Sidebar.Body()}>
          {/* Search bar */}
          <div className="mb-2 relative">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full px-3 py-2 rounded bg-neutral-900 text-sm text-gray-100 placeholder-gray-400 
                         focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>

          <SidebarItem
            title="Dashboard"
            icon={<HomeIcon />}
            href="dashboard"
            isActive={isActive("/dashboard")}
          />

          <SidebarMenu title="Projects">
            <SidebarItem
              title="All Projects"
              icon={<KanbanIcon />}
              href="projects"
              isActive={isActive("/projects")}
            />
            <CollapseItems
              title="Tasks"
              icon={<TasksIcon />}
              items={["My Tasks", "Team Tasks", "Archived Tasks"]}
            />
            <SidebarItem
              title="Calendar"
              icon={<CalendarIcon />}
              href="calendar"
              isActive={isActive("/calendar")}
            />
            <SidebarItem
              title="AI Tools"
              icon={<AiToolsIcon />}
              href="ai-tools"
              isActive={isActive("/ai-tools")}
            />
          </SidebarMenu>

          <SidebarMenu title="Analytics">
            <SidebarItem
              title="Reports"
              icon={<ReportsIcon />}
              href="reports"
              isActive={isActive("/reports")}
            />
          </SidebarMenu>

          <SidebarMenu title="Integrations">
            <SidebarItem
              title="Manage Integrations"
              icon={<IntegrationsIcon />}
              href="integrations"
              isActive={isActive("/integrations")}
            />
          </SidebarMenu>

          <SidebarMenu title="General">
            <SidebarItem
              title="Settings"
              icon={<SettingsIcon />}
              href="settings"
              isActive={isActive("/settings")}
            />
          </SidebarMenu>

          <SidebarMenu title="Updates">
            <SidebarItem
              title="Changelog"
              icon={<ChangeLogIcon />}
              href="changelog"
              isActive={isActive("/changelog")}
            />
          </SidebarMenu>
        </div>

        {/* Footer */}
        <div className={Sidebar.Footer()}>
          <Tooltip content="Settings" color="primary">
            <div className="p-2 rounded hover:bg-neutral-800 cursor-pointer transition-colors">
              <SettingsIcon />
            </div>
          </Tooltip>
          <Tooltip content="Filters" color="primary">
            <div className="p-2 rounded hover:bg-neutral-800 cursor-pointer transition-colors">
              <FilterIcon />
            </div>
          </Tooltip>
          <Tooltip content="Profile" color="primary">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              size="sm"
              className="cursor-pointer hover:ring-2 hover:ring-purple-600 transition-all"
            />
          </Tooltip>
        </div>
      </div>
    </aside>
  );
};
