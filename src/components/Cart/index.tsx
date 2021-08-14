import React from 'react';
import { styled } from 'linaria/react';

type ICartProps = {
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  contentStyle?: React.CSSProperties;
};

const Root = styled.div`
  margin: 1em;
  .content {
    padding: 1em;
    border-radius: 12px;
    box-shadow: 0 8px 12px #ebedf0;
    background: white;
  }
`;

const Cart: React.FC<ICartProps> = ({ className, style, title, contentStyle, children }) => {
  return (
    <Root className={className} style={style}>
      {title && <div>{title} </div>}
      <div className="content" style={contentStyle}>
        {children}
      </div>
    </Root>
  );
};

export default Cart;
