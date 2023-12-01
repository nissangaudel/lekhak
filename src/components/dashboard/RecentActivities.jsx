import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { History } from 'lucide-react';


function RecentActivities() {
  return (
    <Card className="col-span-4 lg:col-span-3">
        <CardHeader>
            <CardTitle>
                <div className="flex justify-between align-center">
                    <p className='text-black dark:text-white font-bold text-2xl'>Recent Topics</p>
                    <History size={28}/>
                </div>
            </CardTitle>
            <CardDescription>
            <p>See what  you learnt in the past.</p>
            </CardDescription>
        </CardHeader>
    </Card>
  )
}

export default RecentActivities