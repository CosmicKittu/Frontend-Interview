import { useState } from "react";
import { X } from "lucide-react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from "./ui/button";
import type { Blog } from "@/types/blogdata";

export default function PublishModal({ isOpen, onclose }: { isOpen: boolean; onclose: () => void }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
        category: "",
        coverImage: "",
    });

    const queryClient = useQueryClient();


    const mutation = useMutation({
        mutationFn: async (blogData: Blog) => {
            const res = await fetch("http://localhost:3001/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blogData),
            });

            if (!res.ok) {
                throw new Error("Failed to publish blog");
            }

            return res.json();
        },
        onSuccess: () => {

            queryClient.invalidateQueries({ queryKey: ["blogs"] });

            setFormData({ title: "", description: "", content: "", category: "", coverImage: "" });
            onclose();
        },
        onError: (error) => {
            console.error("Error publishing blog:", error);
            alert("Failed to publish blog");
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const categories = formData.category.split(",").map(cat => cat.trim()).filter(Boolean);

        const blogData = {
            title: formData.title,
            description: formData.description,
            content: formData.content,
            category: categories,
            date: new Date().toISOString(),
            coverImage: formData.coverImage,
        };

        mutation.mutate(blogData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onclose}
            />

            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold">Publish New Blog</h2>
                    <button
                        onClick={onclose}
                        className="text-gray-500 hover:text-gray-700 transition"
                        disabled={mutation.isPending}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog title"
                            disabled={mutation.isPending}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                            placeholder="Brief description of your blog"
                            disabled={mutation.isPending}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Content
                        </label>
                        <textarea
                            required
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                            placeholder="Write your blog content here..."
                            disabled={mutation.isPending}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Categories
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter categories separated by commas (e.g., Tech, Programming, AI)"
                            disabled={mutation.isPending}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cover Image URL
                        </label>
                        <input
                            type="url"
                            required
                            value={formData.coverImage}
                            onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onclose}
                            disabled={mutation.isPending}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                            disabled={mutation.isPending}
                        >
                            {mutation.isPending ? "Publishing..." : "Publish Blog"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}