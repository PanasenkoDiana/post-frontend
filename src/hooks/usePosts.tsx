import { useState, useEffect } from "react"
import { IPost } from "../shared/types/types"

export function usePosts() {
    const [posts, setPosts] = useState< IPost[ ]>([])
    // loading
    // error

    useEffect(() => {
        async function getPosts() {
            // try catch
            const response = await fetch("http://localhost:8000/api/posts")
            const data = await response.json()
            setPosts(data)
        }
        getPosts()
    }, [])
    
    return { posts: posts }
}