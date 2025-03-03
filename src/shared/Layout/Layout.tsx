import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function Layout() {
    return (
        <div>
            <Header />
            <nav>
                <Link to="/"></Link>
                <Link to="/posts"></Link>
            </nav>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
