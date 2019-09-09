import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl'
import './icon.css'

const CardArea = (props) => {
  console.log(props)

  return (
    <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
      <CardTitle expand style={{ color: '#fff', background: `url(${props.url})center/cover` }}>{props.project.title}</CardTitle>
      <CardText>
        {props.project.text}
      </CardText>
      <CardActions border>
        <a href={props.github} rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
          View in GitHub
        </a>
      </CardActions>
    </Card>
  )

}

export default CardArea;