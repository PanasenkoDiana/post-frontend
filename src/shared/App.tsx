import { LikedContextProvider } from "../context/likedContext"
import { AppRoutes } from "../routes/Routes"

export function App(){
    return(
        <div>
            <LikedContextProvider>
                <AppRoutes></AppRoutes>
            </LikedContextProvider>
        </div>
    )
}