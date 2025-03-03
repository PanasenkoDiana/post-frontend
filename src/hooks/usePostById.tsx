import { useState, useEffect } from 'react'
import { IPost } from '../shared/types/types'

export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`http://localhost:8000/api/post/${id}`)
            const data = await response.json()
            setPost(data)
        }
        getPost()
    }, [id])

    return { post: post }
}
