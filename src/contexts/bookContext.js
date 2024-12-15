import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "./bookReducer";

export const BookContext = createContext()

export const BookContextProvider = ({children}) => {
    
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []
    })
    
    useEffect(() => {
       localStorage.setItem('books', JSON.stringify(books)) 
    }, [books])

    localStorage.setItem('book', JSON.stringify(books))
    return (
    <BookContext.Provider value={{books, dispatch}}>
        {children}
    </BookContext.Provider>
    )
}