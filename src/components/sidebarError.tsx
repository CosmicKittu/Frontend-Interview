
import { AlertCircle } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,

} from "@/components/ui/sidebar";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"




export default function SidebarError() {
    return (
        <Sidebar>
            <SidebarHeader className="p-4 bg-slate-700">
                <h2 className="text-xl font-bold text-white px-2">CA monk</h2>
            </SidebarHeader>
            <SidebarContent className="p-4">
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Failed to load blogs. Please try again later.
                    </AlertDescription>
                </Alert>
            </SidebarContent>
        </Sidebar>
    );
}