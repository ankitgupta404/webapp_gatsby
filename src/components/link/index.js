import React from "react"
import { Link } from "gatsby"
import linkStyles from './index.module.css'

export default function Header(props) {
return (
        <li className={linkStyles.headerlist}>
        <Link to={props.to}>{props.children}</Link>
        </li> 
    )
}