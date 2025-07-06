import { buildConfig } from "payload/config";
import path from "path";
import seo from "@payloadcms/plugin-seo";
import stripePlugin from "@payloadcms/plugin-stripe";

import Categories from "./collections/Categories";
import Media from "./collections/Media";
import Pages from "./collections/Pages";
import Users from "./collections/Users";
import Products from "./collections/Products";
import Orders from "./collections/Orders";
import Redirects from "./collections/Redirects";

import seed from "./seed";
import { Footer } from "./globals/Footer";
import { Header } from "./globals/Header";
import { AfterLogin } from "./components/AfterLogin";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    components: {
      afterLogin: [AfterLogin],
    },
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

    // ✅ FIXED stripe plugin configuration
    stripePlugin({
      collections: [
        {
          slug: "products", // This MUST match Products.slug
          stripeProductIDField: "stripeProductID", // This MUST match the field name in Products collection
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
