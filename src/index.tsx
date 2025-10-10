import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { App } from "~/App"

const container = document.getElementById("root")!
const app = (
    <StrictMode>
        <App />
    </StrictMode>
)

if (import.meta.hot) {
    const root = (import.meta.hot.data.root ??= createRoot(container))
    root.render(app)
} else {
    createRoot(container).render(app)
}
