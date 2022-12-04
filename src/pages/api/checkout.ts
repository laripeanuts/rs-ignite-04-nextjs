import { stripe } from "lib/stripe";
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: "Missing priceId" });
  }

  if (req.method !== "POST") {
    return (
      res.setHeader("Allow", "POST"), res.status(405).end("Method not allowed")
    );
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;

  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  });

  return res.status(201).json({
    checkoutSession: checkoutSession.url
  });
}
