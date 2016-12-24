import React from 'react'
import { render } from 'react-dom'
import './index.html'

const HelloWorld = () => <h1>Hello World</h1>

render(
  <HelloWorld />,
  document.getElementById('app')
)
