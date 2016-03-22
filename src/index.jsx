// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from '../containers/configureStore';

// // Don't do this! You’re bringing DevTools into the production bundle.
// import DevTools from '../containers/DevTools';

// const store = configureStore();

// render(
//   <Provider store={store}>
//     <div>
//       <Voting pair={pair} />
//       <DevTools />
//     </div>
//   </Provider>,
//   document.getElementById('app')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];


ReactDOM.render(
  <div>
    <Voting pair={pair} hasVoted='Trainspotting' />
  </div>,
  document.getElementById('app')
);