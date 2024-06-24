export async function createCheckoutSessionAction(quantity: number) {
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
}
