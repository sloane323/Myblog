import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//firebase 사용법 
// 웹을 사용할 때 파이어 베이스를 들고오기 위해 import 
// import{} form , import form 을 통해서 가져오는 경우 
// : export , export default 로 되어있는 값을 가ㅕㅈ와서, 
// 현재 js 파일에서만 사용  (다른곳에 사용하려면 다시 import )
// js css 파일을 들고 올때 import 해서 들고 오는 경우 
// 전체 파일에 그 내용이 적용 ( 어디에서 한곳에 들고와도 ok  )
import './config/firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
