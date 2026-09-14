import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// eslint-config-next@15.5.25 ships only the legacy eslintrc format (no flat
// config export yet) — bridge it with FlatCompat rather than depending on
// the newer eslint-config-next/core-web-vitals.js flat entrypoint, which
// only exists starting with the (currently canary-only) Next 16 line.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "drizzle/**"],
  },
];

export default eslintConfig;
