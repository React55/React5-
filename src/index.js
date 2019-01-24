import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import 'antd-mobile/dist/antd-mobile.css';
=======
//引入此路径才不会打包失败

import 'swiper/dist/css/swiper.min.css'
>>>>>>> 56234dc180a731bcb65dcecda3fc6e8443dbba0a
import * as serviceWorker from './serviceWorker';

import 'antd-mobile/dist/antd-mobile.css'; 
import 'antd-mobile/lib/date-picker/style/css'; //引入antd插件
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
