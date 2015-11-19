import React, {Component} from 'react';
import {__} from 'i18n';

export default class Example extends Component {
  render(){
    return (
      <div className='container'>
        <div className='top'>
          <p>{this.props.text}</p>
          <p>{__('hello this is a translation')}</p>
        </div>
        <form>
          <input type='text' placeholder={__('this is a placeholder')}/>
        </form>
      </div>
    )
  }
}

