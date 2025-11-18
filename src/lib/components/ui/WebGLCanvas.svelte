<script lang="ts">
	interface Props {
		width: number,
		height: number,
		render: (gl: WebGL2RenderingContext, time: number) => void,
		init?: (gl: WebGL2RenderingContext) => void
	}
	const { width, height, render, init, ...props }: Props & any = $props();

	let canvas: HTMLCanvasElement;

	$effect(() => {
		const INTERNAL_HEIGHT = 1024;
		const INTERNAL_WIDTH = 1024;

		canvas.width = INTERNAL_WIDTH;
		canvas.height = INTERNAL_HEIGHT;

		const gl = canvas.getContext("webgl2", {
			alpha: true,
			premultipliedAlpha: false,
			preserveDrawingBuffer: true
		});
		if (!gl) {
			throw new Error("WebGL2 not supported");
		}

		init?.(gl);

		let animationFrameId: number;
		const start = performance.now();

		const renderLoop = (time: number) => {
			const elapsed = (time - start) / 1000;
			render(gl, elapsed);

			animationFrameId = requestAnimationFrame(renderLoop);
		}

		animationFrameId = requestAnimationFrame(renderLoop);

		return () => {
			cancelAnimationFrame(animationFrameId);
		}
	});
</script>

<canvas bind:this={canvas} {width} {height} {...props}></canvas>
