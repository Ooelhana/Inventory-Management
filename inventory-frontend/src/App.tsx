import "./App.css";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import EmployeeManage from "./components/manage/EmployeeManage";

function App() {
    return (
        <Provider store={store}>
            <div className="page">
                <EmployeeManage />
            </div>
        </Provider>
    );
}

export default App;
