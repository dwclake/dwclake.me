import React from "react";

import { ListItem } from "./ListItem";

const List = (props: {
    children: [React.ReactNode] | React.ReactNode
}) => {
    return <ul>{props.children}</ul>;
}

export { List, ListItem };
