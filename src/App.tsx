/* @Author: dwclake
 * @Created: 10-15-2025
 *
 * The main component for the website, providing client-side routing
 */

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

import { Layout } from "@/Layout"
import {
    About,
    Home,
    Music,
    Pictures,
    Software,
    Writing
} from "@/views"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"                element={ <Layout /> }>
        <Route index               element={ <Home /> }/>
        <Route path="/about"       element={ <About /> }/>
        <Route path="/music"       element={ <Music /> }/>
        <Route path="/pictures"    element={ <Pictures /> }/>
        <Route path="/software"    element={ <Software /> }/>
        <Route path="/writing"     element={ <Writing /> }/>
    </Route>
))

export const App = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
