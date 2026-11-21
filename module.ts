import { module } from "@prisma/composer";
import website from "./service.ts";

export default module("tylerbenfield-dev", ({ provision }) => {
  provision(website);
});
