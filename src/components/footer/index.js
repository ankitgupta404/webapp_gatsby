import React from 'react'
import footerStyles from './index.module.css'


export default function Footer(props) {
    return (
        <div className={footerStyles.footer}>
          <p>{props.footer}</p>
        </div>
    )
}