import {
    Sidebar,
    SidebarContent,
    SidebarHeader,

} from "@/components/ui/sidebar";
import { Skeleton } from "./ui/skeleton";



export default function AppSidebarLoading() {
    return (
        <Sidebar>
            <SidebarHeader className="p-4 bg-slate-700">
                <h2 className="text-xl font-bold text-white px-2">CA monk</h2>
            </SidebarHeader>
            <SidebarContent className="p-4 space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <Skeleton className="h-[125px] w-full rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                ))}
            </SidebarContent>
        </Sidebar>
    );
}