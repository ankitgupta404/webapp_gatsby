import React from 'react'
import texStyles from './index.module.css'

export default function Text(props) {
    return (
        <div className={texStyles.text}>
          <p>{props.text}</p>
        </div>
    )
}