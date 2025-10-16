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
    return (
        <div className="home-view">
            <WebGLCanvas width="600" height="600" onInit={init} onRender={render} />
        </div>
    )
}