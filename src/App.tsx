import * as SC from "./AppStyled"
import Header from './layout/Header/Header';
import SharedLayout from './layout/SharedLayout/SharedLayout';

function App() {
  return (
    <SC.AppCustom className="App">
      <Header/>
      <SharedLayout/>
    </SC.AppCustom>
  );
}

export default App;
