import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';
import { createStore } from 'redux';
import routes from './';
import Header from './js/header.jsx';
import Footer from './js/footer.jsx';
import registerServiceWorker from './registerServiceWorker';



// ReactDOM.render(
//     <section>
//         <Header />
//         <App />
//         <Footer/>
//     </section>,
//     document.getElementById('root')
// );
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
         <Header />
    { routes }
    <Footer/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
