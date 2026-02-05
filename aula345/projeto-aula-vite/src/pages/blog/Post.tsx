import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState<{ id: number; title: string; content: string; userId: number }>();

    const { id } = useParams();

    useEffect(() => {
        const loadPost = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            const foundPost = data.posts.find((p: { id: number }) => String(p.id) === id);
            setPost(foundPost);

        };
        loadPost();
    }, [id]);

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </div>
    )
}

export default Post;