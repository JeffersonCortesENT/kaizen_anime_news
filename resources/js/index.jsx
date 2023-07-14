import React from "react";
import Main from "./main";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>
</React.StrictMode>);

