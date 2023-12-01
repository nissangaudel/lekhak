"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";


const fontSizeMapper = (word) => Math.log2(word.value) * 5;

function TopicCloud({data}) {
    const theme = useTheme();
    const router = useRouter();
  return (
    <>
    <D3WordCloud
    data={data}
    height={550}
    font="Times"
    fontSize={fontSizeMapper}
    rotate={0}
    padding={10}
    fill={theme.theme === "dark" ? "white" : "black"}
    onWordClick={(e, d) => {
        router.push("/type?topic=" + d.text);
      }}
    />
    </>
  )
}

export default TopicCloud