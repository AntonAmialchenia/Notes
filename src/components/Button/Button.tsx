import React from 'react';

interface BtnProps {
  class: string;
  text: string;
  onClick?: (event: any) => void
}





const Button = (props: BtnProps) => {
  return <button className={props.class} onClick={props.onClick}>{props.text}</button>;
};

export default Button;
