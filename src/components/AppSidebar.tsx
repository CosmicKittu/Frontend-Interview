import { useState } from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    
    SidebarHeader,
    SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { useQuery } from '@tanstack/react-query'
import PublishModal from "./PublishModal";
import BlogCard from "./BlogCard";
import AppSidebarLoading from "./SideBarLoading";
import SidebarError from "./sidebarError";

import type { BlogFetched } from "@/types/blogdata";


export function AppSidebar() {

    const [isopen, setIsopen] = useState(false);
    
    const [searchQuery, setSearchQuery] = useState(""); 
    
    const { data, isPending, error } = useQuery<BlogFetched[]>({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3001/blogs");
            if (!res.ok) throw new Error("Failed to fetch blogs");
            return res.json();
        },
    });

    const blogs = data ?? [];

    const filteredBlogs = blogs.filter((blog: any) => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (error) {
        return (
            <>
               <SidebarError /> 
            </>
        );
    }

    if (isPending) {
        return (
            <>
            <AppSidebarLoading />
            </>
        );
    }

    return (
        <>
            <Sidebar collapsible="icon" className="bg-slate-300">
                <SidebarHeader className="p-4 border-rounded-b bg-slate-700 text-white">
                    <h2 className="text-xl font-bold tracking-tight px-2">CA monk</h2>
                    <input 
                        type="text"
                        placeholder="Search blog"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3 py-1.5 mt-2 text-sm text-black bg-white rounded-md outline-none focus:ring-2 ring-slate-400 placeholder:text-gray-500"
                    />
                </SidebarHeader>

                <SidebarContent className="[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-500 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <SidebarGroup className="bg-gray-200">
                        <SidebarGroupLabel className="text-lg text-black"><h1>Latest Articles</h1></SidebarGroupLabel>
                        <SidebarGroupContent className="">
                            {filteredBlogs.map((blog : any) => (
                                <BlogCard blog={blog} key={blog.id}/>
                            ))}
                            
                            {filteredBlogs.length === 0 && (
                                <div className="p-4 text-sm text-gray-500 text-center">
                                    No blogs found.
                                </div>
                            )}

                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <Button size="lg" variant="outline" className="bg-slate-600 hover:bg-slate-700 text-white hover:text-white text-lg " onClick={()=>setIsopen(true)}>Publish</Button>
                </SidebarFooter>
            </Sidebar>
            <PublishModal isOpen={isopen} onclose={() => setIsopen(false)} />
        </>
    );
}