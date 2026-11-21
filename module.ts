import { module } from "@prisma/composer";
import { publicUrl } from "@prisma/composer-prisma-cloud";
import websiteService from "./service.ts";

export default module("tylerbenfield", ({ provision }) => {
  const website = provision(websiteService);
  provision(publicUrl({ id: "site", url: "tylerbenfield.dev", target: website.http }));
});
