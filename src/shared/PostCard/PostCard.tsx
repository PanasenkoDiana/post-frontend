import React, { useState } from 'react';
import './PostCard.css';

// Интерфейс для пропсов
interface PostProps {
    title: string;
    description: string;
    author: string;
    date: string;
    category: string;
}

export function Post({ title, description, author, date, category }: PostProps) {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
    };

    return (
        <div className="post-container">
            <div className="post-header">
                <img
                    src="https://www.svgrepo.com/show/327151/person-circle-sharp.svg"
                    alt="User Icon"
                    className="post-avatar"
                />
                <div className="post-user-info">
                    <h2 className="post-author">{author}</h2>
                    <span className="post-date">{date}</span>
                </div>
            </div>

            <h1 className="post-title">{title}</h1>
            <p className="post-description">{description}</p>

            <div className="post-footer">
                <div className="post-likes">
                    <span>{likes}</span>
                    <button
                        className="like-button"
                        onClick={handleLike}
                        disabled={liked}
                        title={liked ? "Вы уже поставили лайк" : "Поставить лайк"}
                    >
                        <img
                            src={
                                liked
                                    ? "https://www.svgrepo.com/show/505913/like.svg"
                                    : "https://www.svgrepo.com/show/506227/like.svg"
                            }
                            alt={liked ? "Liked" : "Like"}
                            className="like-icon"
                        />
                    </button>
                </div>
                <span className="post-category">{category}</span>
            </div>
            <hr className="post-divider" />
        </div>
    );
}