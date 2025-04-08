"use client"
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { SparklesIcon } from 'lucide-react';
import { useUserRole } from '@/hooks/useUserRole';

function DashboardBtn() {
    const {isCandidate, isLoading} = useUserRole()
    if (isCandidate || isLoading) return null;
  return (
    <div>
        <Link href={"/dashboard"}>
        <Button className='gap-2 font-medium' size={"sm"}>
            <SparklesIcon className='size-4'/>
            Dashboard
        </Button>
        </Link>
    </div>
  )
}

export default DashboardBtn