"use client";
import React, { useEffect, useState } from "react";
import MainTypeInput from "@/components/MainTypeInput";
import { Keyboard } from "lucide-react";
import { ShieldAlert } from "lucide-react";

function type({ params }) {
  async function getfacts(id) {
    try {
      const res = await fetch(`http://localhost:3000/api/facts/${id}`, {
        method: "GET",
      });
      if (res.ok) {
        return res.json();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const [fact, setFact] = useState("");
  const [errors, setErrors] = useState(0);
  const [wpm, setWpm] = useState(0);

  const getTypeData = (error, wpm) => {
    setErrors(error);
    setWpm(wpm);
  };

  getfacts(params.factsId).then((res) => {
    let data = res.data.facts;
    setFact(data["2"]);
  });

  return (
    <div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full">
        <MainTypeInput getData={getTypeData} text={fact}></MainTypeInput>
      </div>
      <div className="absolute flex justify-between items-center bottom-0 mb-3 mx-15 px-8 w-full ">
        <div className="text-base font-medium text-gray-400">
          Now playing...
        </div>
        <div className="flex gap-5 text-base font-medium">
          <p className="flex gap-2 items-center text-gray-400">
            <Keyboard size={22} />
            WPM: {wpm}
          </p>
          <p className=" flex gap-2 items-center text-red-300">
            <ShieldAlert size={22} /> Errors: {errors}
          </p>
        </div>
      </div>
    </div>
  );
}

export default type;
