import React from 'react'
import heroStyles from './index.module.css'


export default function Hero(props) {
    return (
        <div className={heroStyles.herocontainer}>
        <div className={heroStyles.heroheading}>
          <h1>{props.heroheading}</h1>
          <p>{props.heropara}</p>
        </div>
      </div>
    )
}