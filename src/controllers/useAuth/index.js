// import { useState } from 'react';

// export default function useLogin() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     function authenticate(cb) {
//         setIsAuthenticated(true)
//         setTimeout(cb, 100); // fake async
//     }

//     function signout(cb) {
//         setIsAuthenticated(false)
//         setTimeout(cb, 100);
//     }

//     // const [fakeAuth,setFakeAuth] = useState({
//     //     isAuthenticated: false,
//     // authenticate(cb) {
//     //   fakeAuth.isAuthenticated = true;
//     //   setTimeout(cb, 100); // fake async
//     // },
//     // signout(cb) {
//     //   fakeAuth.isAuthenticated = false;
//     //   setTimeout(cb, 100);
//     // }
//     // })

//     return { isAuthenticated, authenticate, signout }
// }

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}