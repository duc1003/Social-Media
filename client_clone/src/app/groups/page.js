"use client"
// import { useRouter } from "next/router"
// import { useEffect } from "react";
// export default function Group() {
//     const router = useRouter();

//     useEffect(() =>{
//       router.push('/groups/feed');
//     },[router]);

//     return null;
//   }

// pages/groups/page.tsx (hoặc index.tsx)
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Groups = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/groups/feed');
  }, [router]);

  return null;
};

export default Groups;
