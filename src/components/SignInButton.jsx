"use client"
import React from 'react'
import { Button } from './ui/button'
import {signIn} from 'next-auth/react'

function SignInButton({text}) {
  return (
    <Button onClick={()=> {signIn('google')}} >
        {text}
    </Button>
  )
}

export default SignInButton