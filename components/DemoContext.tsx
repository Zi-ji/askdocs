import React from 'react';

const AppContext = React.createContext({
  emptyState: true,
  setEmptyState: (value: boolean) => {}
});

export default AppContext;
