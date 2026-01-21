import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const BlogLayout = () => {
  return (

    <SidebarProvider style={{
      "--sidebar-width": "25rem",
    } as React.CSSProperties} className="bg-gray-200 min-h-screen w-full">


      <AppSidebar />


      <main className="min-h-screen w-full">

        <div className="block md:hidden">
          <SidebarTrigger />
        </div>

        <div className="p-6 min-h-screen w-full">
          <Outlet />
        </div>
      </main>

    </SidebarProvider>
  );
};

export default BlogLayout;