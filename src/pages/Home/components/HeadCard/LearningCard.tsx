import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import Cart from '@/components/Cart';
import bookPng from '@/assets/icon/book.png';
import { UserDataContext } from '@/components/Context';
import { CategoriesLv1, UserRole } from '@/constants/UserData';
import TagItem from './TagItem';

type ILearningCardProps = {
  className?: string;
  style?: React.CSSProperties;
  value: number;
};

const Root = styled(Cart)`
  .card__content {
    display: flex;
    flex-direction: column;
    .card__content__header {
      color: white;
      font-size: 0.8em;
      display: flex;
      align-items: center;
      .card__header__text {
        padding: 0.5em;
      }
    }
    .card__content__tagbar {
      display: flex;
      justify-content: center;
    }
    .card__circle {
      color: white;
      font-size: 0.8em;
    }
  }
`;

const contentStyle: React.CSSProperties = {
  background: 'var(--secondary-color)',
  backgroundImage: 'linear-gradient(to bottom right, #6867ee, #adadee)',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
};

const LearningCard: React.FC<ILearningCardProps> = ({ className, style, value }) => {
  const { userData } = useContext(UserDataContext);

  return (
    <Root className={className} style={style} contentStyle={contentStyle}>
      <div className="card__content">
        <div className="card__content__header">
          <img width="20px" height="20px" src={bookPng} />
          <span className="card__header__text">刷题进度</span>
        </div>
        <div className="card__content__tagbar">
          {userData.role === UserRole.fe ? (
            <TagItem name={CategoriesLv1.fe} cur={userData.done[CategoriesLv1.fe]} total={200} />
          ) : (
            <TagItem name={CategoriesLv1.be} cur={userData.done[CategoriesLv1.be]} total={200} />
          )}

          <TagItem name="计算机基础" cur={userData.done[CategoriesLv1.cb]} total={200} />
        </div>
      </div>
      <div className="card__circle">
        {/* @ts-ignore */}
        <van-circle
          value={value}
          rate={100}
          speed={30}
          text="总进度"
          strokeWidth={10}
          color={{
            '0%': '#81d9d8',
            '100%': '#ef9756',
          }}
        />
      </div>
    </Root>
  );
};

export default LearningCard;
