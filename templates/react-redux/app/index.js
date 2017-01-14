import React from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import Root from './containers/Root'
import configureStore from './store'
import './index.html'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('app')
)

