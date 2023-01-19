import './App.css';
import Room from './components/Room';
import store from "./store.js";
import {Provider} from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Room/>
      </Provider>
    </div>
  );
}

export default App;
