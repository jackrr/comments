import Link from "next/link";
import { db } from "@/db";
import { useParams } from "next/navigation";

export default async function Page() {
  const { id } = useParams<{ id: string }>();
  const post = await db.post.findFirst({ where: { slug: id } });

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  );
}
