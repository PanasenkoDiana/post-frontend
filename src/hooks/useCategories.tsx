import { useState, useEffect } from "react"
import { ICategory } from "../shared/types/types"

export function useCategory() {
    const [Category, setCategories] = useState< ICategory[] >([])

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