import React from 'react';

interface BtnProps {
  class: string;
  text: string;
}

const Button = (props: BtnProps) => {
  return <button className={props.class}>{props.text}</button>;
};

export default Button;
