import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as SC from "./AppStyled"
import Header from './layout/Header/Header';
import SharedLayout from './layout/SharedLayout/SharedLayout';

function App() {
  return (
    <SC.AppCustom className="App">
      <ToastContainer/>
      <Header/>
      <SharedLayout/>
    </SC.AppCustom>
  );
}

export default App;
