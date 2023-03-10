import React from 'react';
import './Button.scss';


export const Button = ({text,icon,onClick,onMouseEnter,onMouseLeave}) => {
  return (
        <div onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="button">
            <p className="button__text">{text}</p>
              {icon && <img className="button__icon" src={icon} />}
        </div>
  )
}