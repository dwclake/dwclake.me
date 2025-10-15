/* @author: dwclake
 * @created: 10-15-2025
 *
 */

type Props = { children: [React.ReactNode] | React.ReactNode }

export const List = (props: Props) => {
    return <ul>{ props.children }</ul>
}

export const ListItem = (props: Props) => {
    return <li>{ props.children }</li>
}
