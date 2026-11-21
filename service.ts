import { rawHttpContract } from "@prisma/composer/http";
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "website",
  deps: {},
  expose: { http: rawHttpContract },
  build: node({
    module: import.meta.url,
    dir: "dist",
    entry: "server/entry.mjs",
  }),
});
