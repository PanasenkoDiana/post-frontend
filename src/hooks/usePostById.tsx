import { useState, useEffect } from 'react'
import { IPost } from '../shared/types/types'

export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()
    // loading
    // error

    useEffect(() => {
        // нужна проверка на то что id не NaN
        // Если Number('dsadas') = NaN
        //  NaN является типом number

        async function getPost() {
            // try catch
            const response = await fetch(`http://localhost:8000/api/post/${id}`)
            const data = await response.json()
            setPost(data)
        }
        getPost()
    }, [id])

    return { post: post }
}
