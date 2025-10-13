import { useEffect, useRef } from "react"

type Props = {
    width: string,
    height: string,
    className?: string,
    onRender: (gl: WebGLRenderingContext, time: number) => void
}

export const GLCanvas = ({ width, height, className = "canvas", onRender }: Props) => {
    const canvas_ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvas_ref.current!
        const gl = canvas.getContext("webgl")!

        let animationFrameId: number
        const start = performance.now()

        function render(time: number) {
            const elapsed = (time - start) / 1000

            onRender(gl, elapsed)

            animationFrameId = requestAnimationFrame(render)
        }

        animationFrameId = requestAnimationFrame(render)

        return () => cancelAnimationFrame(animationFrameId)
    }, [onRender])

    return <canvas className={className} ref={canvas_ref} width={width} height={height}></canvas>

}
