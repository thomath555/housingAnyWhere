// Core
import React, { useContext } from 'react';

// Components
import AppRouter from './routes'
import DetailsModal from './components/DetailsModal';

// Style
import { GlobalStyle } from './assets/styles/globalStyles';

// Others
import { store } from './store/index';


const App = () => {

  // get global store using context hook
  const globalState = useContext(store);
  const { state } = globalState;

  return (
    <>
      <GlobalStyle />
      <AppRouter />
      {state.modalData?.showModal && <DetailsModal />}
    </>
  );
}

export default App;
