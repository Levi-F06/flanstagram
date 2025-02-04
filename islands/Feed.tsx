import { useEffect, useState } from "preact/hooks";

interface Post {
  ID_post: number;
  ID_user: number;
  subject: string;
  content: string;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <div>
              <h2>{post.subject}</h2>
              <div>
              </div>
            </div>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
