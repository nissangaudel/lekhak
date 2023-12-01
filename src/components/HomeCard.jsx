import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SignInButton from './SignInButton'

function HomeCard() {
  return (
    <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px]">
        <CardHeader>
            <CardTitle>
                Welcome to Lekhak🔥!
            </CardTitle>
            <CardDescription>
              Lekhak is a platform designed to make learning to type fun using AI. Login to experience!
            </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text={"Sign In With Google!"}/>
        </CardContent>
    </Card>
  )
}

export default HomeCard