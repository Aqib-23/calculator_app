

import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import {name as appName} from './app.json'
import store from "./componets/redux/store";
Provider

const Appredux = ()=>(
    <Provider store={store}>
        <App></App>
    </Provider>
)
AppRegistry.registerComponent(appName , () => Appredux)