import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import fePng from '@/assets/img/fe.png';
import bePng from '@/assets/img/be.png';
import { Picker } from '@tarojs/components';
import { UserDataContext } from '@/components/Context';
import { UserRole } from '@/constants/UserData';

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

const range = [UserRole.fe, UserRole.be];

const Select: React.FC<ISelectProps> = ({}) => {
  const { userData, setUserData } = useContext(UserDataContext);

  function handleChange(value: UserRole) {
    console.log(value);
    setUserData((darft) => {
      darft.role = value;
    });
  }

  return (
    <Picker mode="selector" range={range} onChange={(e) => handleChange(range[e.detail.value])}>
      <Root>
        <img width="20px" height="20px" src={userData.role === UserRole.fe ? fePng : bePng} />
        <span className="selector__text"> {userData.role}</span>
      </Root>
    </Picker>
  );
};

export default Select;
