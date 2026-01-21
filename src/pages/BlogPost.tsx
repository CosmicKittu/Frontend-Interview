import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BlogPostSkeleton from "@/components/BlogPostSkeleton";
import BlogPostError from "@/components/BlogPostError";
import BlogPostContent from "@/components/BlogPostContent";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3001/blogs/${id}`);
      if (!res.ok) throw new Error("Failed to fetch blog post");
      return res.json();
    },
  });

  if (isPending) return <BlogPostSkeleton />;
  
  if (isError) return <BlogPostError message={error.message} />;

  return <BlogPostContent blog={data} />;
}