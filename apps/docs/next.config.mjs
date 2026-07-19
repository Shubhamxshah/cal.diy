import nextra from "nextra";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const withNextra = nextra({});

export default withNextra({
  reactStrictMode: true,
});
