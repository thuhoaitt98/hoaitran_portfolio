"use client";
import React, { createContext, Dispatch, ReactNode, useReducer } from "react";

interface ThemeState {
    darkMode: boolean;
}

interface ThemeAction {
    type: "LIGHTMODE" | "DARKMODE";
}

interface ThemeContextProps {
    state: ThemeState;
    dispatch: Dispatch<ThemeAction>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
    undefined,
);

const initialState: ThemeState = { darkMode: true };

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case "LIGHTMODE":
            return { darkMode: false };
        case "DARKMODE":
            return { darkMode: true };
        default:
            return state;
    }
};

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}
