import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostSkeleton() {
    return (
        <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-none sm:border sm:shadow-sm my-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl bg-muted/20">
                <Skeleton className="h-full w-full" />
            </div>

            <CardHeader>
                <Skeleton className="h-12 w-3/4 mb-4" />
                <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-20 rounded" />
                    <Skeleton className="h-6 w-16 rounded" />
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[80%]" />
            </CardContent>
        </Card>
    );
}