import { useState, useEffect } from "react"
import { ICategory } from "../shared/types/types"

export function useCategory() {
    // category
    const [Category, setCategories] = useState< ICategory[] >([])
    // тоже самое что и в остальных хуках написал
    useEffect(() => {
        async function getCategories() {
            const response = await fetch("http://localhost:8000/api/categories")
            const data = await response.json()
            setCategories(data)
        }
        getCategories()
    }, [])

    return { Category: Category }
}