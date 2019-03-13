import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navbar from './Navbar';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header></Header>
      <Navbar></Navbar>
    );
  }
}
