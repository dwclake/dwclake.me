/* @Author: dwclake
 * @Created: 10-15-2025
 *
 * The entrypoint for the bun backend
 */

import { serve } from "bun"
import index from "index.html"

const server = serve({
    development: process.env.NODE_ENV !== "production" && {
        hmr: true,
        console: true
    },

    routes: {
        "/*": index
    }
})

console.log(`🚀 Server running at ${server.url}`)
