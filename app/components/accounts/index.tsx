"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { DotsIcon } from "@/app/components/icons/accounts/dots-icon";
import { ExportIcon } from "@/app/components/icons/accounts/export-icon";
import { InfoIcon } from "@/app/components/icons/accounts/info-icon";
import { TrashIcon } from "@/app/components/icons/accounts/trash-icon";
import { HouseIcon } from "@/app/components/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/app/components/icons/breadcrumb/users-icon";
import { SettingsIcon } from "@/app/components/icons/sidebar/settings-icon";
import Table from "@/app/components/table/table";
import { AddUser } from "./add-user";
import { Providers } from "@/app/providers";

export const Accounts = () => {
  return (
    <Providers applyLayout={true}>
      <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
        <ul className="flex">
          <li className="flex gap-2">
            <HouseIcon />
            <Link href={"/"}>
              <span>Home</span>
            </Link>
            <span> / </span>{" "}
          </li>

          <li className="flex gap-2">
            <UsersIcon />
            <span>Users</span>
            <span> / </span>{" "}
          </li>
          <li className="flex gap-2">
            <span>List</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold">All Accounts</h3>
        <div className="flex justify-between flex-wrap gap-4 items-center">
          <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
            <Input
              classNames={{
                input: "w-full",
                mainWrapper: "w-full",
              }}
              placeholder="Search users"
            />
            <SettingsIcon />
            <TrashIcon />
            <InfoIcon />
            <DotsIcon />
          </div>
          <div className="flex flex-row gap-3.5 flex-wrap">
            <AddUser />
            <Button color="primary" startContent={<ExportIcon />}>
              Export to CSV
            </Button>
          </div>
        </div>
        <div className="max-w-[95rem] mx-auto w-full">
          <Table />
        </div>
      </div>
    </Providers>
  );
};
