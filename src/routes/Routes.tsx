import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { MainPage } from "../pages/MainPage/MainPage";
import { LikedPage } from "../pages/LikedPage/LikedPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/posts" element={<PostListPage />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/liked" element={<LikedPage />} />
                    <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
