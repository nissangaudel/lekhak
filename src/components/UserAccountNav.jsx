"use client"
import React from 'react'
import { signOut } from "next-auth/react";
import { LogOut } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

function UserAccountNav(props) {

    const {name, email, image} = props.user
    console.log("image",image);
 
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild >
        <Image width={40}  height={40} src={image} className='rounded-full' alt="profile image" referrerPolicy='no-referrer' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>
            <p className='font-medium'>{name}</p>
            <p className=' w-[200px] text-xs font-light text-zinc-700'>{email}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className='text-red-600 cursor-pointer'>
                <Link href="/"  onClick={()=> {signOut()}}>SingOut</Link>
                <LogOut className='w-4 h-4 ml-2'/>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}




export default UserAccountNav
















