import "./App.css";
import "antd/dist/antd.css";

import RecordList from "./components/RecordList";
import NewRecordForm from "./components/NewRecordForm";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="page">
                <NewRecordForm />
                <RecordList />
            </div>
        </Provider>
    );
}

export default App;
