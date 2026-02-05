import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, About, Blog, Post } from "./pages/pages";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;