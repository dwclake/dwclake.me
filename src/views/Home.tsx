/* @author: dwclake
 * @created: 10-15-2025
 *
 * The view for the home page, which is reposnsible for showing
 * a brief introduction of myself, my interests and skills
 */

import { WebGLCanvas } from "@/components/ui/webglcanvas"
import { init, render } from "@/animations/flower/RainbowFlower"

import "@/styles/Home.css"

export const Home = () => {
    document.getElementById("fake-link")?.addEventListener("click", (event) => {
        event.preventDefault()
    })

    return (
        <div className="home-view">
            <a href="Animation thanks to Dr. GPT" id="fake-link">
                <WebGLCanvas width="600" height="600" onInit={init} onRender={render} />
            </a>
        </div>
    )
}