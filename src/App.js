import "./App.scss";
import HomePage from "./components/homePage/index.jsx";
import { Switch, Route } from "react-router-dom";
function App() {
    console.log("App");
    return (
        <div className='App'>
            <Switch>
                <Route path={"/homePage"}>
                    <HomePage></HomePage>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
