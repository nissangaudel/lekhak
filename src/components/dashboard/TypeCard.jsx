"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";

import { Bot } from "lucide-react";

function TypeCard() {
  const router = useRouter();

  return (
    <Card
      onClick={() => {
        router.push("/topic");
      }}
      className="hover:cursor-pointer hover:opacity-75"
    >
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between align-center">
            <p className="text-black dark:text-white font-bold text-2xl">
              Start Typing!
            </p>
            <Bot size={28} />
          </div>
        </CardTitle>
        <CardDescription>
          <p>
            Pick a topic you like, type out facts about it. Learn and improve
            typing skills at the same time!
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default TypeCard;
