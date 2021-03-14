import "./App.scss";
import HomePage from "./components/homePage/index.jsx";
import ShopDetail from "./components/shopDetail/shopDetail.jsx";
import { Switch, Route } from "react-router-dom";
function App() {
    console.log("App");
    return (
        <div className='App'>
            <Switch>
                <Route path={"/homePage"}>
                    <HomePage></HomePage>
                </Route>
                <Route path={"/shopDetail"}>
                    <ShopDetail></ShopDetail>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
