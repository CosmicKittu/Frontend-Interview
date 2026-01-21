import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { timeAgo } from "@/utils/time";

export default function BlogPostContent({ blog }: { blog: any }) {
    return (
        <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-none sm:border sm:shadow-sm my-8">

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl bg-muted/20">
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                />
            </div>

            <CardHeader>
                <div className="space-y-4">
                    <CardTitle className="text-5xl font-bold tracking-tight">
                        {blog.title}
                    </CardTitle>

                    <div className="flex items-center justify-between border-b pb-4">

                        <div className="flex flex-wrap gap-2">
                            {blog.category?.map((cat: string) => (
                                <span
                                    key={cat}
                                    className="text-xs font-medium bg-green-200 px-2 py-1 rounded text-green-800"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>


                        <span className="text-sm text-slate-500 font-medium whitespace-nowrap ml-4">
                            {timeAgo(blog.date)}
                        </span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="mt-4 leading-relaxed text-slate-700">
                {blog.content}
            </CardContent>
        </Card>
    );
}