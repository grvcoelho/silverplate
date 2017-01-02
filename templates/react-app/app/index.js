import React from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import './index.html'

const HelloWorld = props => <h1>Hello {props.name}!</h1>

render(
  <HelloWorld name="World" />,
  document.getElementById('app')
)

