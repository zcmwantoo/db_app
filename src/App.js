import React from 'react';
import {GlobalStyled} from './style.js'
import {GlobalFont} from './static/iconfont/iconfont'
import Header from './common/header/Header'
function App() {
  return (
    <div className="App">
      <GlobalStyled></GlobalStyled>
      <GlobalFont></GlobalFont>
      <Header></Header>
    </div>
  );
}

export default App;
