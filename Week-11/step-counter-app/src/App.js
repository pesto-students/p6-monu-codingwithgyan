import './App.css';
import StepCounter from './StepCounter';
import {Provider} from "react-redux";
import store from "./store.js";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <StepCounter/>
      </Provider>
    </div>
  );
}

export default App;
