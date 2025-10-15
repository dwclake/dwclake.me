/* @author: dwclake
 * @created: 10-15-2025
 *
 * Provides the init and render functions reposnible for
 * animating a spinning octogon to a WebGL2 canvas
 */

export const init = (gl: WebGL2RenderingContext) => {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
}

export const render = (gl: WebGL2RenderingContext, time: number) => {
    gl.clearColor(0.1, 0.1, 0.1, 0.0)
    gl.clear(gl.COLOR_BUFFER_BIT)

    if (!(gl as any)._flowerSetup) {
        (gl as any)._flowerSetup = setupFlower(gl)
    }

    const { program, positionBuffer, colorBuffer, vertexCount } = (gl as any)._flowerSetup

    gl.useProgram(program)

    const angle = time;
    const cosA = Math.cos(angle)
    const sinA = Math.sin(angle)

    const uMatrix = new Float32Array([
        cosA, sinA, 0,
        -sinA, cosA, 0,
        0, 0, 1
    ])

    const uMatrixLoc = gl.getUniformLocation(program, "uMatrix")
    gl.uniformMatrix3fv(uMatrixLoc, false, uMatrix)

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const posLoc = gl.getAttribLocation(program, "aPosition")
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
    const colorLoc = gl.getAttribLocation(program, "aColor")
    gl.enableVertexAttribArray(colorLoc)
    gl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, 0, 0)

    gl.drawArrays(gl.TRIANGLES, 0, vertexCount)
}


function setupFlower(gl: WebGL2RenderingContext) {
    const vsSource =
        `#version 300 es

        in vec2 aPosition;
        in vec3 aColor;
        uniform mat3 uMatrix;
        out vec3 vColor;

        void main() {
            vec3 pos = uMatrix * vec3(aPosition, 1.0);
            gl_Position = vec4(pos.xy, 0.0, 1.0);
            vColor = aColor;
        }
        `

    const fsSource =
        `#version 300 es

        precision mediump float;
        in vec3 vColor;
        out vec4 outColor;

        void main() {
            outColor = vec4(vColor, 1.0);
        }
        `

    const program = createProgram(gl, vsSource, fsSource)

    const petals = 8
    const radius = 0.7
    const positions: number[] = []
    const colors: number[] = []

    for (let i = 0; i < petals; i++) {
        const a0 = (i / petals) * Math.PI * 2
        const a1 = ((i + 1) / petals) * Math.PI * 2

        const r = Math.abs(Math.sin(a0))
        const g = Math.abs(Math.sin(a0 + 2.1))
        const b = Math.abs(Math.sin(a0 + 4.2))

        // Each triangle (center, outer1, outer2)
        positions.push(
            0, 0,
            Math.cos(a0) * radius, Math.sin(a0) * radius,
            Math.cos(a1) * radius, Math.sin(a1) * radius
        )

        // Color per vertex
        for (let j = 0; j < 3; j++) {
            colors.push(r, g, b)
        }
    }

    const positionBuffer = gl.createBuffer()!
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

    const colorBuffer = gl.createBuffer()!
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW)

    return { program, positionBuffer, colorBuffer, vertexCount: positions.length / 2 }
}

function createProgram(gl: WebGL2RenderingContext, vsSource: string, fsSource: string) {
    const vs = gl.createShader(gl.VERTEX_SHADER)!
    gl.shaderSource(vs, vsSource)
    gl.compileShader(vs)
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(vs) || "Vertex shader error")
    }

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!
    gl.shaderSource(fs, fsSource)
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(fs) || "Fragment shader error")
    }

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) || "Program link error")
    }

    return program
}