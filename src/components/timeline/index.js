import React from 'react'
import timelineStyles from './index.module.css'

export default function Timeline(props) {
    return (
    <div className={timelineStyles.timeline}>
    <img src={props.logo} className={timelineStyles.logo} alt={props.alttext} />
    <p className={timelineStyles.excerpt}>{props.excerpt}</p>
    <div className={timelineStyles.description}>
      <h2 className={timelineStyles.companyname}>{props.companyname}</h2>
    </div>
  </div>
    )

}
