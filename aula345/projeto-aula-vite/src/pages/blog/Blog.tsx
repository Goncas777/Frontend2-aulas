import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState<{ id: number; title: string; content: string; userId: number }[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            setPosts(data.posts);
        };
        loadPosts();
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link to={`/blog/${post.id}`}>Open Post</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;