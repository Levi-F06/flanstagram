import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";

export const db =  await new Client().connect({
  hostname: "localhost",
  username: "root",
  db: "flanstagram",
  password: "",
  charset: "utf8mb4"
});

