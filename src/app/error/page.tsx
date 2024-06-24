"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import cancel from "../../../public/cancel.gif";

export default function Success() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <Image src={cancel} alt="cancel" className="mb-5" />;
      <h1 className="text-3xl">Failed to add tokens. Please try again.</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-[#78909C] text-3xl text-white font-semibold rounded-xl mt-9 py-3 px-14"
      >
        OK
      </button>
    </main>
  );
}
