import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header.jsx';
import Footer from './js/footer.jsx';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import './css/common.css';
import './css/index.css';



ReactDOM.render(
    <section>
        <Header />
        <App />
        <Footer/>
    </section>,
    document.getElementById('root')
);
registerServiceWorker();
