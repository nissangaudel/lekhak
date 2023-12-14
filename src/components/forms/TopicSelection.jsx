"use client";
import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";

import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loading from "../loading";
import generateFacts from "@/lib/gpt";

function TopicSelection() {
  const { data: session } = useSession();

  const [showLoader, setShowLoader] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [number, setNumber] = useState(0);
  const [topicError, setTopicError] = useState("");
  const [numberError, setNumberError] = useState("");

  const router = useRouter();

  const email = session?.user?.email;

  async function createFacts(topic, number, user) {
    try {
      const res = await fetch("http://localhost:3000/api/facts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          number,
          user,
        }),
      });

      if (res.ok) {
        return res.json();
      }
    } catch (e) {
      console.log(e);
    }
  }
  const handelSubmit = async (topic, number) => {
    setTopicError("");
    setNumberError("");
    if (topic.length < 4) {
      setTopicError("Topic must contain atleast 6 characters.");
    }

    if (number < 1) {
      setNumberError("Number of topic must be atleast 1.");
    }

    if (topic.length >= 4 && number >= 1) {
      setShowLoader(true);
      const data = await createFacts(topic, number, email);
      console.log(data);
      setFinishedLoading(true);
      if (typeof window !== "undefined") {
        router.push(`/type/${data.factsId}`);
      }
    }
  };

  if (showLoader) {
    return <Loading finished={finishedLoading} />;
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Topic Selection</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label
              className={topicError !== "" ? "text-red-600" : ""}
              htmlFor="topic"
            >
              Topic
            </Label>
            <Input
              className="mt-2"
              type="text"
              id="topic"
              placeholder="Enter a Topic"
              onChange={(event) => setTopic(event.target.value)}
            />
            <p className="text-sm font-normal my-2 text-gray-600">
              Please provide any topic you are intresting on.
            </p>
            <Error message={topicError} />
          </div>
          <div className="my-5">
            <Label
              className={numberError !== "" ? "text-red-600" : ""}
              htmlFor="quantity"
            >
              Number of Facts
            </Label>
            <Input
              className="mt-2"
              type="number"
              min="1"
              id="quantity"
              placeholder="How many facts?"
              onChange={(event) => setNumber(event.target.value)}
            />
            <p className="text-sm font-regular my-2 text-gray-600">
              You can choose how many facts you would like to be learn here.
            </p>
            <Error message={numberError} />
          </div>

          <div>
            <Button
              onClick={() => {
                handelSubmit(topic, number);
              }}
            >
              Start Typing <ChevronRight className="ml-1" size={22} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TopicSelection;

function Error({ message }) {
  return (
    <div>
      {message ? (
        <p className="text-red-600 my-3 font-medium text-xs">{message}</p>
      ) : null}
    </div>
  );
}
