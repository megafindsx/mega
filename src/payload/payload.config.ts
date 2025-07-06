import { buildConfig } from "payload/config";
import path from "path";
import seo from "@payloadcms/plugin-seo";
import stripePlugin from "@payloadcms/plugin-stripe";

import Categories from "./collections/Categories";
import Media from "./collections/Media";
import Orders from "./collections/Orders";
import Pages from "./collections/Pages";
import Products from "./collections/Products";
import Redirects from "./collections/Redirects";
import Users from "./collections/Users";

import seed from "./seed";
import { Footer } from "./globals/Footer";
import { Header } from "./globals/Header";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug, // assumes Users collection defines slug
    // Removed missing AfterLogin component
  },
  collections: [
    Categories,
    Media,
    Pages,
    Users,
    Products,
    Orders,
    Redirects,
  ],
  globals: [Header, Footer],
  plugins: [
    seo({
      collections: ["pages", "products"],
    }),
    stripePlugin({
      collections: [
        {
          slug: "products",                    // matches Products.slug
          stripeProductIDField: "stripeProductID", // matches field in Products collection
        },
      ],
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  onInit: async (payload) => {
    if (process.env.PAYLOAD_SEED === "true") {
      await seed(payload);
    }
  },
});
