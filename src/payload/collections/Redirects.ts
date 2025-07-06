import { CollectionConfig } from "payload/types";

const Redirects: CollectionConfig = {
  slug: "redirects",
  admin: {
    useAsTitle: "from",
  },
  fields: [
    {
      name: "from",
      type: "text",
      required: true,
    },
    {
      name: "to",
      type: "text",
      required: true,
    },
    {
      name: "statusCode",
      type: "number",
      defaultValue: 301,
      required: true,
    },
  ],
};

export default Redirects;
