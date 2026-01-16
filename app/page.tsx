import Link from "next/link";
import { db } from "@/db";

export default async function Page() {
  const posts = await db.post.findMany();

  return (
    <>
      <h1 className="text-xl mb-4">All posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="underline">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
