// import React from 'react';
// import {Provider} from 'react-redux';
// import {persistStore} from 'redux-persist';
// import {PersistGate} from 'redux-persist/integration/react';
// import store from './redux/store';
// import Home from './screens/home';

// let persistor = persistStore(store);

// export default function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Home />
//       </PersistGate>
//     </Provider>
//   );
// }

import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from './screens/home';

//MAIN ENTRY POINT FOR APP WITH REDUX STORE CONFIGURED
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
