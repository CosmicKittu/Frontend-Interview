import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface BlogPostErrorProps {
    message?: string;
}

export default function BlogPostError({ message }: BlogPostErrorProps) {
    return (
        <div className="max-w-4xl mx-auto my-8 px-4">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {message || "Something went wrong while loading the blog."}
                </AlertDescription>
            </Alert>
        </div>
    );
}