import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header.jsx';
import Footer from './js/footer.jsx';
import './css/common.css';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <section>
        <Header />
        <Footer/>
    </section>,
    document.getElementById('one')
);
registerServiceWorker();