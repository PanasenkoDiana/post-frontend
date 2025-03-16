import { useContext } from "react";
import { LikesContext } from "../../context/likedContext";

export function LikedPage() {
    const { likedPosts, removeLike } = useContext(LikesContext);

    return (
        <div>
            {likedPosts.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <p>{post.author}</p>
                    <button onClick={() => removeLike(post.id)}>Remove Like</button>
                </div>
            ))}
        </div>
    );
}