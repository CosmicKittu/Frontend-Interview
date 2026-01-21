import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <>
        
        <div className="fixed inset-0 flex flex-col justify-center items-center w-full h-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 gap-8 md:gap-12 px-4">
      
          
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight text-slate-900 leading-tight">
              CA Monk
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-600">
              Welcome to our blog site
            </p>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              Discover insightful articles on finance, technology, and innovation
            </p>
          </div>

          <Button 
            asChild 
            size="lg" 
            className="text-xl md:text-2xl px-10 py-6 md:px-16 md:py-8 h-auto bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-xl transition-transform hover:scale-105"
          >
            <Link to="/blogs">
              Explore Blogs
            </Link>
          </Button>
        </div>
        </>
    );
}