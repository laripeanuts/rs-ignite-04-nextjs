import Stripe from "stripe";

const key = process.env.ENV_LOCAL_STRIPE_SECRET_KEY;

if (!key) {
  throw new Error("Stripe key not found");
}

export const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "Ignite Shop",
    version: "0.1.0"
  }
});
