import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";

import Categories from "./collections/Categories";
import Media from "./collections/Media";
import Orders from "./collections/Orders";
import Pages from "./collections/Pages";
import Products from "./collections/Products";
import Redirects from "./collections/Redirects";
import Users from "./collections/Users";

import stripePlugin from "@payloadcms/plugin-stripe";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: "users",
  },
  collections: [Users, Media, Categories, Products, Orders, Pages, Redirects],
  plugins: [
    stripePlugin({
      collections: [
        {
          slug: "products", // this MUST match your Products slug
          stripeProductIDField: "stripeProductID", // this must match the field in Products.ts
        },
      ],
    }),
  ],
});
