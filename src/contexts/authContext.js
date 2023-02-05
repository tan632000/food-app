import React, { createContext, useReducer } from "react";

export const SignInContext = createContext()

export const SignInContextProvider = (props) => {
    const [signedIn, dispatchSignedIn] = useReducer(SignInContext, {
        userToken: null,
    })
    return (
        <SignInContext.Provider value = {{signedIn, dispatchSignedIn}}>
            {props.children}
        </SignInContext.Provider>
    )
}
