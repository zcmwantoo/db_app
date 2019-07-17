import React from 'react';
import {GlobalStyled} from './style.js'
import {GlobalFont} from './static/iconfont/iconfont'
import Header from './common/header/Header'

import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <GlobalStyled></GlobalStyled>
        <GlobalFont></GlobalFont>
        <Header></Header>
      </div>
    </Provider>
  );
}

export default App;
