import React from 'react';
import { styled } from 'linaria/react';

type IMarkTitleProps = {
  className?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
};

const Root = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-left: 1rem;
  color: #6a6a77;
  font-weight: 700;
  line-height: 1.5;

  ::before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    position: absolute;
    left: 0.5rem;
    width: 4px;
    height: 90%;
    top:10%;
    background-color: var(--primary-color);
    box-shadow: 0 0.15rem 0.256rem 0 var(--secondary-color);
    border-radius: 1px;
  }
`;

const MarkTitle: React.FC<IMarkTitleProps> = ({ className, style, title }) => {
  return (
    <Root className={className} style={style}>
      {title}
    </Root>
  );
};

export default MarkTitle;
