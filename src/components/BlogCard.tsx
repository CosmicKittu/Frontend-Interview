import { Card, CardTitle, CardDescription, CardHeader, CardFooter } from "./ui/card";
import { Link } from "react-router-dom";

import { timeAgo } from "@/utils/time";

export default function BlogCard({ blog }: any) {
    return (
        <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <Card
                className="w-full max-w-sm flex flex-col justify-between hover:shadow-lg transition my-3 "
            >
                <CardHeader className="space-y-2">

                    <div className="flex flex-wrap gap-2">
                        {blog.category.map((cat: any) => (
                            <span
                                key={cat}
                                className="text-xs font-medium bg-green-200 px-2 py-1 rounded"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    <CardTitle className="text-lg leading-tight">
                        {blog.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                        {blog.description}
                    </CardDescription>
                </CardHeader>

                <CardFooter className="text-xs text-muted-foreground flex justify-between">
                    <span>{timeAgo(blog.date)}</span>
                </CardFooter>
            </Card>
        </Link>
    );
}