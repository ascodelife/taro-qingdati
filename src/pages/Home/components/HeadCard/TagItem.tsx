import React from 'react';
import { styled } from 'linaria/react';
import { AtTag } from 'taro-ui';

type ITagItemProps = {
  className?: string;
  style?: React.CSSProperties;
  name: string;
  cur: number;
  total: number;
};

const Root = styled.div`
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  .at-tag {
    color: white;
    background: transparent;
    border-color: transparent;

  }
  .progress-bar {
    .progress-bar__cur {
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
    }
    .progress-bar__total {
      font-size: 0.7rem;
      color: #ffffff96;
    }
  }
`;

const TagItem: React.FC<ITagItemProps> = ({ className, style, name, cur, total }) => {
  return (
    <Root className={className} style={style}>
      <AtTag size="small" name={name} circle>
        {name}
      </AtTag>
      <div className="progress-bar">
        <span className="progress-bar__cur">{cur}</span>
        <span className="progress-bar__total">/{total}</span>
      </div>
    </Root>
  );
};

export default TagItem;
