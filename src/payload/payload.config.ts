import { buildConfig } from "payload/config";
import path from "path";
import seo from "@payloadcms/plugin-seo";
import stripePlugin from "@payloadcms/plugin-stripe";

import Categories from "./collections/Categories";
import Media from "./collections/Media";
import Pages from "./collections/Pages";
import Products from "./collections/Products";
import Orders from "./collections/Orders";
import Redirects from "./collections/Redirects";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Media,
    Pages,
    Products,
    Orders,
    Redirects,
    Users,
  ],
  globals: [],
  plugins: [
    seo({
      collections: [
        { slug: "pages" },
        { slug: "products" },
      ],
    }),
    stripePlugin({
      collections: [
        {
          slug: "products",
          stripeProductIDField: "stripeProductID",
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
});
