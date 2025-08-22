"use client";

import Link from "next/link";
import {
  Breadcrumb as ShadCnBreadcrumb,
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "../../ui/breadcrumb";

interface BreadcrumbProps {
  title: string;
}

export default function BasicBreadcrumb({ title }: BreadcrumbProps) {
  return (
    <ShadCnBreadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="text-sm">
              Users
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <span className="text-sm font-bold">{title}</span>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </ShadCnBreadcrumb>
  );
}
