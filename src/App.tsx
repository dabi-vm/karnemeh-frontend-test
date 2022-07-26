import { Provider } from "react-redux";
import "./App.css";
import { MainLayout } from "./components/Main/MainLayout";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
