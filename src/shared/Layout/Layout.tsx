// Импорт не используется, нужно убрать
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function Layout() {
    return (
        <div>
            <Header />
            <nav>
                {/* текста добавь, их же не видно */}
                <Link to="/"></Link>
                <Link to="/posts"></Link>
            </nav>
            {/* всесто main нужно использовать компонент Main и в нем уже писать main */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
