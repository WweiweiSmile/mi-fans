// function reduxMiddleware(dispatch, getState) {
//     return function (next) {
//         return function (action) {
//             if (action.payload instanceof Promise) {
//                 action.payload.then((data) => {
//                     return next({
//                         payload: data,
//                         type: action.type,
//                     });
//                 });
//             }
//             return action;
//         };
//     };
// }

let reduxMiddleware = (store) => (next) => (action) => {
    if (action.payload instanceof Promise) {
        // 当promise 为 resolve 时, 将已经resovle后的值 传递给reducer
        action.payload.then((data) => {
            return next({
                payload: data.data,
                type: action.type,
            });
        });
        // promise 还不是 resolve状态时,不传值给 reducer
        return;
    }
    // 将action 传递给 reducer
    return next(action);
};

export default reduxMiddleware;
