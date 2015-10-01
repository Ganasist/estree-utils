import React, {Component} from 'react';

const __ = (string) => 'hello'

export default class Example extends Component {
  render(){
    return (
      <div>
      <p>{this.props.text}</p>
      <p>{__('hello')}</p>
      </div>
    )
  }
}