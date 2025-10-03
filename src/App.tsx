import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import {
    Root,
    About,
    Code,
    Home,
    Music,
    Photography,
    Writing
} from "@/containers";

import "@/App.css";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/code" element={<Code /> } />
        <Route path="/music" element={<Music />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/writing" element={<Writing />} />
    </Route>
));

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export { App };
