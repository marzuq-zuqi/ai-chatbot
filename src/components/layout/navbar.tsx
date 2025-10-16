"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow">
      <Link href="/" className="text-xl font-bold">AI Project</Link>
      <ThemeToggle />
    </nav>
  );
}