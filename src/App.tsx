import { Routes, Route } from "react-router-dom";
import BlogLayout from "./pages/BlogLayout";
import BlogPost from "./pages/BlogPost";
import BlogPlaceholder from "./pages/BlogPlaceholder";
import { BrowserRouter } from 'react-router-dom'
// import { Home } from "lucide-react";
import { Home } from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blogs" element={<BlogLayout />}>
        <Route index element={<BlogPlaceholder />} />
        <Route path=":id" element={<BlogPost />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}