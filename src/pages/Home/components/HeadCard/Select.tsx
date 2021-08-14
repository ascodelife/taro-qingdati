import React, { useState } from 'react';
import { styled } from 'linaria/react';
import fePng from '@/assets/img/fe.png';
import bePng from '@/assets/img/be.png';
import { Picker } from '@tarojs/components';

const range = ['前端工程师', '后端工程师'];

type ISelectProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Root = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  color: #6a6a77;
  font-size: 0.8em;
  .selector__text {
    padding: 0.5em;
  }
  padding-right: 20px;
  ::after {
    position: absolute;
    top: 50%;
    right: -4px;
    margin-top: -5px;
    border: 10px solid;
    border-color: #6a6a77 transparent transparent transparent;
    content: '';
  }
`;

const Select: React.FC<ISelectProps> = ({}) => {
  const [value, setValue] = useState('0');

  return (
    <Picker mode="selector" range={range} onChange={(e) => setValue(e.detail.value as string)}>
      <Root>
        <img width="20px" height="20px" src={value === '0' ? fePng : bePng} />
        <span className="selector__text"> {range[value]}</span>
      </Root>
    </Picker>
  );
};

export default Select;
