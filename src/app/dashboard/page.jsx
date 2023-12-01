import HistoryCard from '@/components/dashboard/HistoryCard'
import HotTopicsCard from '@/components/dashboard/HotTopicsCard';
import RecentActivities from '@/components/dashboard/RecentActivities';
import TypeCard from '@/components/dashboard/TypeCard'
import React from 'react'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export const metadata = {
  title: "Dashboard | Lekhak",
  description: "Learn Facts, Learn Typing",
};


async function dashboard() {

  const session = await getServerSession();
  if(!session?.user) {
    redirect("/");
  }
  return (
    <div className="my-24 px-8 mx-20" >
      <p className='text-black dark:text-white text-3xl font-bold '>
      Dashboard!
      </p>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
      <TypeCard/>
      <HistoryCard/>
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
      <HotTopicsCard/>
      <RecentActivities/>
      </div>
    </div>
  )
}

export default dashboard