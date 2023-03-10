import React from 'react';
import './Navbar.scss';
import logo from '../../assets/img/client_main_logo.png';
import {Button} from '../Button';


export const Navbar = () => {
  return (
        <div className="navBarContainer">
          <img className="navBarContainer__logo" src={logo} alt="client_main_logo" />
          <div className="navBarContainer__menu">
            <ul className="navBarContainer__menu__item">home</ul>
            <ul className="navBarContainer__menu__item">project</ul>
            <ul className="navBarContainer__menu__item">services</ul>
            <ul className="navBarContainer__menu__item">about</ul>
            <ul className="navBarContainer__menu__item">blog</ul>
            <ul className="navBarContainer__menu__item">shop</ul>
            <ul className="navBarContainer__menu__item">contact</ul>
            <Button className="navBarContainer__button" text={"Sign Up"}/>
          </div>
        </div>
  )
}
