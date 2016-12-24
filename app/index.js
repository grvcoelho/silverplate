import React from 'react'
import { render } from 'react-dom'
import './index.html'

const HelloWorld = props => <h1>Hello World - {props.name}</h1>

render(
  <HelloWorld name="GUilherme" />,
  document.getElementById('app')
)

