import React from "react"

import { ListItem } from "./List/ListItem"

const List = (props: {
    children: [React.ReactNode] | React.ReactNode
}) => {
    return <ul>{props.children}</ul>
}

export { List, ListItem }
