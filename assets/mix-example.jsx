import React, {Component} from 'react';
import {__} from 'i18n';

function translate(string){
  return string;
}

const util = {
  translateMethod: function(string){
    return string;
  },
  notGettext: function(string){
    return 'not';
  }
}

const translated = util.translateMethod('how are you');
util.notGettext('hello');

(function(){
  __('can you catch this?');
})()

export default class Example extends Component {
  render(){
    translate('bob');
    return (
      <div className='container'>
        <div className='top'>
          <p>{this.props.text}</p>
          <p>{util.translateMethod('another translation')}</p>
          <p>{__('hello this is a translation')}</p>
        </div>
        <form>
          <input type='text' placeholder={__('this is a placeholder')}/>
        </form>
      </div>
    )
  }
}
