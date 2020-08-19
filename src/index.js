import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  // 严格模式
  /** 作用：
   * 识别具有不安全生命周期的组件
   * 有关就字符串ref用法的警告
   * 检测意外的副作用
   * 检测遗留 context API
  */
  <React.StrictMode>
    <Provider store={store}>
      {/* history模式路由 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
