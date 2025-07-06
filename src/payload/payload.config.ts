import { buildConfig } from 'payload/config';
import path from 'path';
import dotenv from 'dotenv';

import Categories from './collections/Categories';
import Media from './collections/Media';
import Orders from './collections/Orders';
import Pages from './collections/Pages';
import Products from './collections/Products';
import Users from './collections/Users'; // ✅ Make sure this path is correct

dotenv.config({
  path: path.resolve(__dirname, '../../../.env'),
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug, // ✅ Needed for auth to work
  },
  collections: [
    Users,      // ✅ Must be included for auth to work
    Media,
    Pages,
    Products,
    Orders,
    Categories,
  ],
  globals: [],
});
