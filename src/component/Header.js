import React, {Component} from 'react';
import '../App.css';
import samsung from '../image/samsung.png';
import {Link} from "react-router-dom";

class Header extends Component {
  render(){
    return (
      <header>
        <div className="menu">
          <img className="logo" src={samsung} aria-hidden alt="logo image"></img>
          <ul>
            <li><Link to="/Checkbox">증상정보 찾기</Link></li>
            <li>약학정보 찾기</li>
            <li>근처병원 찾기</li>
            <li>근처약국 찾기</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
