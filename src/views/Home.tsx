import { WebGLCanvas } from "@/components/ui/webglcanvas"

export const Home = () => {
    const render = (gl: WebGL2RenderingContext, time: number) => {
        const r = Math.abs(Math.sin(time * 0.8))
        const g = Math.abs(Math.sin(time * 0.6))
        const b = Math.abs(Math.sin(time * 1.0))

        gl.clearColor(r, g, b, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)
    }

    return (
        <>
            <p>Home page stuff</p>
            <WebGLCanvas width="500" height="500" onRender={render} />
        </>
    );
}
