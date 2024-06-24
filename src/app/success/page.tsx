"use client";

import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="bg-gradient-to-r text-transparent bg-clip-text from-[#000001] from-45% via-[#DCAB4B] to-[#243138] to-80% font-bold text-3xl">
        Tokens added successfully!
      </h1>
      <button
        onClick={() => router.push("/")}
        className="
      bg-[#78909C] text-3xl text-white font-semibold rounded-xl mt-9 py-3 px-14
      "
      >
        OK
      </button>
    </main>
  );
}
