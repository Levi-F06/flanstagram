// THANK YOU CHAT GPT ❤️

import { Handlers } from "$fresh/server.ts";
import { db } from "../../utils/db.ts";

export const handler: Handlers = {
  async GET(_req) {
    const posts = await db.query(
      "SELECT ID_post, ID_user, subject, content FROM posts;",
    );
    return new Response(JSON.stringify(posts), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
