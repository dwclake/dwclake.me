import { Outlet } from 'react-router-dom';

import { Header } from '@/containers/Header';
import { Footer } from '@/containers/Footer';

export const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
