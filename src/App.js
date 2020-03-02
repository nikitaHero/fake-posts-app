import React from "react";

import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import { store } from "./store";
import * as HomePage from "./scenes/HomePage";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

function App() {
  return (
    <Provider store={store}>
      <>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          getState={state => state.toastr}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <HomePage.page />
      </>
    </Provider>
  );
}

export default App;
