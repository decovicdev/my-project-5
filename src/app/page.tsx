"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Image from "next/image";

import loading from "../../public/loading.gif";

export default function Home() {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (quantity: number) => {
      const response = await fetch(
        "https://api.alindor.tech/create-checkout-session/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: quantity,
            user_email: "test@gmail.com",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    },

    onSuccess: (data) => {
      console.error("success:", data);

      router.push("/success");
    },

    onError: (error) => {
      console.error("Error", error);

      router.push("/error");
    },
  });

  if (isPending) {
    return (
      <div className="h-screen w-screen grid place-content-center ">
        <Image src={loading} alt="loading" />
      </div>
    );
  }

  return (
    <main className="">
      <div className="h-40 pt-7 bg-black mt-32 text-white ">
        <h1 className="text-7xl font-bold text-center">Billing</h1>
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const quantity = formData.get("quantity");

          console.log(quantity);

          if (typeof quantity === "string") {
            await mutateAsync(parseInt(quantity));
          }
        }}
        className="mt-11 mx-auto w-max"
      >
        <label htmlFor="quantity" className="text-xl font-semibold">
          Purchase More Tokens:
          <br />
          <span className="italic text-lg font-normal">
            One token is equivalent to $0.20.
          </span>
        </label>

        <br />

        <input
          type="number"
          id="quantity"
          name="quantity"
          required
          placeholder="Enter quantity here"
          className="rounded-xl px-4 py-2.5 mt-3 border-2 border-[#B7B7B7] font-bold"
        />

        <br />

        <button
          type="submit"
          className="bg-[#78909C] text-white font-bold rounded-xl mt-6 py-3 px-11"
        >
          Add Tokens to Balance
        </button>
      </form>
    </main>
  );
}
