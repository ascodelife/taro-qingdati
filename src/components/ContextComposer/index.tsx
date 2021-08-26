import React from 'react';

type IContextComposerProps = {
  // contexts: { context: React.Context<any>; value: any }[];
  contexts: React.ReactElement[];
};

const ContextComposer: React.FC<IContextComposerProps> = ({ contexts, children }) => {
  return (
    <>
      {/* {contexts.reduce((child, parent) => {
        const { context, value } = parent;
        return <context.Provider value={value}>{child}</context.Provider>;
      }, children)} */}
      {contexts.reduce((child, parent) => {
        return React.cloneElement(parent,{},child);
      }, children)}
    </>
  );
};

export default ContextComposer;
