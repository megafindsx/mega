import dotenv from "dotenv";
dotenv.config();

import path from "path";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Media from "./collections/Media";
// ...other collections, ensuring they exist:
import Categories from "./collections/Categories";
import Products from "./collections/Products";
import Orders from "./collections/Orders";
import Pages from "./collections/Pages";
// DO NOT import non-existent collections like Redirects if file missing

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: { user: Users.slug },
  collections: [Users, Media, Categories, Products, Orders, Pages],
  globals: [],
  plugins: [
    // Remove stripePlugin and SEO first,
    // Re-add only once basic build succeeds:
    // stripePlugin({ stripeSecretKey: process.env.STRIPE_SECRET_KEY, ... }),
    // seo({ collections: ["pages", "products"], ... }),
  ],
});
