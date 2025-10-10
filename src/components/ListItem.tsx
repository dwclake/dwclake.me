import React from "react"

type Props = { children: React.ReactNode }

export const ListItem = (props: Props) => {
    return <li>{ props.children }</li>
}
