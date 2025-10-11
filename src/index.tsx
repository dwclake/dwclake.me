import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import { store } from "~/store"
import { App } from "~/App"
import "~/styles/index.css"

const container = document.getElementById("root")!
const app = (
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)

if (import.meta.hot) {
    const root = (import.meta.hot.data.root ??= createRoot(container))
    root.render(app)
} else {
    createRoot(container).render(app)
}
