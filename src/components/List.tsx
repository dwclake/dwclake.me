import React from 'react'

export const List = (props: {
    children: [React.ReactNode] | React.ReactNode
}) => {
    return <ul>{props.children}</ul>
}
