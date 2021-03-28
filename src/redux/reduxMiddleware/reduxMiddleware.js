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

let reduxMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    if (action.payload instanceof Promise) {
        action.payload.then((data) => {
            return next({
                payload: data.data,
                type: action.type,
            });
        });
    }
    return action;
};

export default reduxMiddleware;
