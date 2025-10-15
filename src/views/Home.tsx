import { WebGLCanvas } from "@/components/ui/webglcanvas"
import { init, render } from "@/animations/flower"

export const Home = () => {
    return (
        <>
            <p>Home page stuff</p>
            <WebGLCanvas width="600" height="600" onInit={init} onRender={render} />
        </>
    )
}