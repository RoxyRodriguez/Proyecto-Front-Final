import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './styles/style.css';
import './styles/menuStyle.css';
import './js/navbar';

AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out-sine',
    delay: 200,
    mirror: true
  });





ReactDOM.render(<App />, document.getElementById('root'));
