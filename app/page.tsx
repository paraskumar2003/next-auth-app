"use client";
import { Session } from "next-auth";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {



  const session = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (session.status == "unauthenticated") {
      push("/login");
      console.log(true);
    }
  }, [session]);

  return (
    <div>This is my home page.</div>
  )
}
