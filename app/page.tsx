import Link from "next/link";
import { db } from "@/db";

export default async function Page() {
  const posts = await db.post.findMany();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
