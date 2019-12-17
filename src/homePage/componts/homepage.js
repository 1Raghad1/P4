import React, { Component } from 'react'
import Img from './imagepage'
import Down from './hompagedown'
import Footer from '../footer'
import './imagepage.js'
export default class homepage extends Component {
    render() {
        return (
            <div>
  <Img/>
   <Down/>
   <Footer/>
            </div>
        )
    }
}
