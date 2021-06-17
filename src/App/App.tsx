import React from "react";
import { Test } from '@/App/components/Test';

const App: React.FC<{ val:string }> = ({val}) => {
  return (<p> <Test/> Hello {val}</p>);
};

export default App;
