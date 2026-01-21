import { BookOpen } from "lucide-react";

export default function BlogPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50/50 p-8 text-center animate-in fade-in zoom-in duration-300">
      

      <div className="mb-6 rounded-full bg-slate-100 p-6 ring-1 ring-slate-200">
        <BookOpen className="h-12 w-12 text-slate-400" />
      </div>


      <h2 className="mb-2 text-2xl font-semibold text-slate-800">
        No blog selected
      </h2>

      <p className="max-w-sm text-slate-500">
        Select an article from the sidebar to view its content here. 
        Explore topics on Tech, Finance, and more.
      </p>
      
    </div>
  );
}