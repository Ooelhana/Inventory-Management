import "./App.css";

import RecordList from "./components/RecordList";
import NewRecordForm from "./components/NewRecordForm";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <>
                <NewRecordForm />
                <RecordList />
            </>
        </Provider>
    );
}

export default App;
