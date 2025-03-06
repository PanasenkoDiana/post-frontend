import { useEffect, useState } from "react";
import { Post } from "../../shared/PostCard/PostCard";
import "./PostListPage.css";
import { usePosts } from "../../hooks/usePosts";
import { useCategory } from "../../hooks/useCategories";
import { IPost, ICategory } from "../../shared/types/types";

export function PostListPage() {
    // loading error тоже хендлим
    const { posts } = usePosts();
    // отлично, не многие додумались
    // Category -> category
    const { Category } = useCategory();
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("Все");

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedCategory(event.target.value);
    }

    useEffect(() => {
        // ну способ мощный конечно)). Не понял только зачем
        // Если массив пустой, то лучше posts.length
        // Если проверить что посты это не undefined и тд, тогда просто if (posts)
        if (!Array.isArray(posts)) {
            setFilteredPosts([]);
            return;
        }

        if (selectedCategory === "Все") {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(
                posts.filter((post: IPost) =>
                    // okay good
                    post.category.name.toLowerCase().includes(selectedCategory.toLowerCase())
                )
            );
        }
    }, [posts, selectedCategory]);

    return (
        <div className="post-list-container">
            <div className="category-filter">
                {/* )) тоже самое что и выше */}
                {Array.isArray(Category) ? (
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="Все">Все</option>
                        {Category.map((category: ICategory) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                ) : (
                    // good, но лучше делать вместо isArray loading и error
                    <p>Загрузка категорий...</p>
                )}
            </div>

            <div className="posts">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <Post
                            key={post.id}
                            title={post.title}
                            description={post.description || "Нет описания"}
                            author={post.author}
                            date={post.date ? new Date(post.date).toLocaleDateString() : ""}
                            category={post.category.name}
                        />
                    ))
                ) : (
                    <p>Посты не найдены.</p>
                )}
            </div>
        </div>
    );
}
