"use client";
import React from "react";
import { useSession } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ui/ThemeToggle";
import SignInButton from "./SignInButton";

function Navbar() {
  const { status, data: session } = useSession();

  console.log("status:", status);

  return (
    <div className="absolute inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] py-3 h-fit border-b border-zinc-300">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-20 max-w-7xl">
        <p className="text-black dark:text-white text-xl font-extrabold transition-all hover:translate-y-[1] cursor-pointer">
          <a href="/">&#47;&#47;Lekhak</a>
        </p>
        <div className="flex items-center justify-between gap-5">
          <ThemeToggle />
          {status === "authenticated" ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
