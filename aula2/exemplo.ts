export interface Post {
    title: string;
    content: string;
    contentdatePublished?: Date;
}

class PostContent {
    post: Post;

    constructor(post: Post) {
        this.post = post;
    }
}

const post = new PostContent({
    title: "TypeScript",
    content: "Description",
    contentdatePublished: new Date()
});

console.log(post);
console.log(post.post.title);

