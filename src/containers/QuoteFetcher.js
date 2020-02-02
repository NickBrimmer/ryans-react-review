import React, { Component } from 'react';

export default class QuoteFetcher extends Component {
  state = {
    quoteUrl: 'simpsons',
    quote: {
      text: '',
      name: '',
      img: ''
    }
  }

  render() {
    return (
      <h1>Placeholder</h1>
    );
  }
}
