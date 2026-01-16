"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`http://localhost:3001/posts/${id}`);
      const post = await res.json();
      setPost(post);
    }

    fetchPost();
  }, [id]);

  return (
    <>
      <h1 className="text-xl mb-4">{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  );
}
