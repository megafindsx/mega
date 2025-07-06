import path from 'path';
import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';

import Users from './collections/Users';
import Products from './collections/Products';
import Categories from './collections/Categories';
import Media from './collections/Media';
import Orders from './collections/Orders';
import Pages from './collections/Pages';
import Redirects from './collections/Redirects';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug, // This MUST be your auth collection
  },
  collections: [
    Users,      // ✅ This must be defined and have `auth: true`
    Products,
    Categories,
    Media,
    Orders,
    Pages,
    Redirects,
  ],
});
