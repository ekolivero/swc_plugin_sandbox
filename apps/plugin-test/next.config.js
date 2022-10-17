const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = async (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */

  const isSeoNode = process.env.SEO_NODE === "1";

  console.log("isSeoNode", isSeoNode);

  if (phase === PHASE_PRODUCTION_BUILD && isSeoNode) {
    return {
      ...defaultConfig,
      experimental: {
        swcPlugins: [
          [
            require.resolve(
              "/Users/erikpc/Documents/projects/swc_parser/packages/swc-console-replace-plugin/target/wasm32-wasi/release/console_replace.wasm"
            ),
            {},
          ],
        ],
      },
    };
  }
  return {
    ...defaultConfig,
  };
};
