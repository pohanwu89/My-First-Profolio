import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl'
import './icon.css'

const CardArea = (props) => {
  console.log(props)

  return (
    <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
      <CardTitle expand style={{ color: '#fff', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png)center/cover' }}>{props.project.title}</CardTitle>
      <CardText>
        {props.project.text}
      </CardText>
      <CardActions border>
        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
          View in GitHub
        </a>
      </CardActions>
    </Card>
  )

}

export default CardArea;