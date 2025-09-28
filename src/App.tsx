import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";

import "./index.css";

export function App() {
    return (
        <div className="app">
            <Header />
            <div id="page">
                <Home />
            </div>
            <Footer />
        </div>
    );
}