import "./App.css";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import InventoryManage from "./components/manage/InventoryManage";

function App() {
    return (
        <Provider store={store}>
            <div className="page">
                <InventoryManage />
            </div>
        </Provider>
    );
}

export default App;
