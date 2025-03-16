import { createContext, ReactNode, useState, useContext } from "react";
import { IPost } from '../shared/types/types'

interface ILikesContext {
    likedPosts: IPost[];
    addLike: (post: IPost) => void;
    removeLike: (id: number) => void;
    isLiked: (id: number) => boolean;
}

const initialValue: ILikesContext = {
    likedPosts: [],
    addLike: () => {},
    removeLike: () => {},
    isLiked: () => false,
};

export const LikesContext = createContext<ILikesContext>(initialValue);

export function useLikesContext() {
    return useContext(LikesContext);
}

interface ILikesContextProviderProps {
    children: ReactNode;
}

export function LikedContextProvider({ children }: ILikesContextProviderProps) {
    const [likedPosts, setLikedPosts] = useState<IPost[]>([]);

    function addLike(post: IPost) {
        setLikedPosts((prev) => [...prev, post]);
    }

    function removeLike(id: number) {
        setLikedPosts((prev) => prev.filter((post) => post.id !== id));
    }

    function isLiked(id: number) {
        return likedPosts.some((post) => post.id === id);
    }

    return (
        <LikesContext.Provider value={{ likedPosts, addLike, removeLike, isLiked }}>
            {children}
        </LikesContext.Provider>
    );
}