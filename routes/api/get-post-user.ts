import { Handlers } from "$fresh/server.ts";
import { db } from "../../utils/db.ts";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const id = Number(url.searchParams.get("id"));
    const info = await db.query(
      `SELECT username, profile_picture FROM users WHERE ID_user = ${id};`,
    );
    return new Response(JSON.stringify(info), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
