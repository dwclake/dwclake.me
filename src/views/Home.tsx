/* @author: dwclake
 * @created: 10-15-2025
 *
 * The view for the home page, which is reposnsible for showing
 * a brief introduction of myself, my interests and skills
 */

import { WebGLCanvas } from "@/components/ui/webglcanvas"
import { init, render } from "@/animations/flower"

export const Home = () => {
    return (
        <>
            <p>Home things</p>
            <WebGLCanvas width="600" height="600" onInit={init} onRender={render} />
        </>
    )
}