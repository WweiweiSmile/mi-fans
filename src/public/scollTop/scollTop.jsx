import { useEffect } from "react";
import { useHistory } from "react-router-dom";
let ScollTop = (props) => {
    let history = useHistory();
    console.log(history);
    useEffect(() => {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }, [history.location.pathname]);
    return <></>;
};

export default ScollTop;
