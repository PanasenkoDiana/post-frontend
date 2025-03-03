import { useParams } from 'react-router-dom';
import { usePostById } from '../../hooks/usePostById';
import './PostPage.css';

export function PostPage() {
    const { id } = useParams();
    const { post } = usePostById(Number(id));

    if (!post) {
        return <div>Пост не найден</div>;
    }

    const formattedDate = post.date ? new Date(post.date).toLocaleDateString() : "";

    return (
        <div className="main-container">
            <div className="post-info">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-author"><strong>Автор:</strong> {post.author}</p>
                <p className="post-date"><strong>Дата:</strong> {formattedDate}</p>
                <p className="post-description">{post.description || "Нет описания"}</p>
                <p className="post-category"><strong>Категория:</strong> {post.category.name}</p>
            </div>
        </div>
    );
}
