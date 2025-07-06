import path from 'path';
import dotenv from 'dotenv';
import { buildConfig } from 'payload/config';

// Import your collections
import Users from './collections/Users';
import Categories from './collections/Categories';
// ...add the rest
import Media from './collections/Media';
import Pages from './collections/Pages';
import Products from './collections/Products';
import Orders from './collections/Orders';
import Redirects from './collections/Redirects';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,  // ⚠️ Points to your auth collection
  },
  collections: [
    Users,       // 🔹 Must include the auth collection
    Media,
    Pages,
    Products,
    Orders,
    Categories,
    Redirects,
  ],
  globals: [],
  plugins: [
    // any plugins you use...
  ],
});
