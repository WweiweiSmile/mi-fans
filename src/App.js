import "./App.scss";
import HomePage from "./components/homePage/index.jsx";
import ShopDetail from "./components/shopDetail/shopDetail.jsx";
import BuyCar from "./components/buyCar/buyCar";
import Login from "./components/login/login.jsx";
import PersonalCenter from "./components/personalCenter/personalCenter.jsx";
import BuyCheckout from "./components/buyCheckout/buyCheckout";
import { Switch, Route } from "react-router-dom";

function App() {
    console.log("App");
    return (
        <div className='App'>
            <Switch>
                <Route path={"/homePage"}>
                    <HomePage></HomePage>
                </Route>
                <Route path={"/shopDetail/:id"}>
                    <ShopDetail></ShopDetail>
                </Route>
                <Route path={"/buyCar"}>
                    <BuyCar></BuyCar>
                </Route>
                <Route path={"/login"}>
                    <Login></Login>
                </Route>
                <Route path={"/personalCenter"}>
                    <PersonalCenter></PersonalCenter>
                </Route>
                <Route path={"/buyCheckout"}>
                    <BuyCheckout></BuyCheckout>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
