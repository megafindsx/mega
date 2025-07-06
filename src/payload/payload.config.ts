import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";
import type { CollectionConfig } from "payload/types";

import Categories from "./collections/Categories";
import Media from "./collections/Media";
import Orders from "./collections/Orders";
import Pages from "./collections/Pages";
import Products from "./collections/Products"; // ✅ This imports the updated config
import Redirects from "./collections/Redirects";
import Users from "./collections/Users";
import { CustomEndpoint } from "./endpoints/custom-endpoint";

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
  globals: [],
  endpoints: [CustomEndpoint],
  plugins: [
    stripePlugin({
      collections: ["products"], // ✅ Must exactly match the slug
    }),
  ],
});
