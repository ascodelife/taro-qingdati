import React from 'react';
import { styled } from 'linaria/react';
import qdtLogoPng from '@/assets/img/qdt-logo.png';
import qdtTextPng from '@/assets/img/qdt-text.png';
import LearningCard from './LearningCard';
import Select from './Select';

type IHeadCardProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Root = styled.div`
  background: white;
  padding: 1em;
  box-shadow: 0 8px 12px #ebedf0;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title__logo {
      display: flex;
      align-items: center;
    }
  }
`;

const HeadCard: React.FC<IHeadCardProps> = ({ className, style }) => {
  return (
    <Root className={className} style={style}>
      <div className="title">
        <div className="title__logo">
          <img width="40px" height="40px" src={qdtLogoPng} />
          <img width="80px" height="30px" src={qdtTextPng} />
        </div>
        <div className="title_select">
          <Select />
        </div>
      </div>
      <LearningCard value={40} />
    </Root>
  );
};

export default HeadCard;
