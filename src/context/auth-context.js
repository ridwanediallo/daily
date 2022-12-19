import {createContext} from 'react';

const AuthContext = createContext({
    todos: [],
});

 export const AuthContextProvider = ({children}) => {
    return <AuthContext.Provider>{children}</AuthContext.Provider>
 }


export default AuthContext;
