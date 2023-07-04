import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ErrorPage from "./ErrorPage";
import { baseTheme, ChakraProvider, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Services from "./pages/Services";
import FAQs from "./pages/FAQs";

const theme = extendTheme(
    {
        colors: {
            primary: baseTheme.colors.purple,
            red: baseTheme.colors.red,
        },
    },
    withDefaultColorScheme({
        colorScheme: 'primary',
    })
);

const router = createBrowserRouter([
    {
        path: '*',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'contact',
                element: <Contact/>,
            },
            {
                path: 'team',
                element: <Team/>,
            },
            {
                path: 'services',
                element: <Services/>,
            },
            {
                path: 'FAQs',
                element: <FAQs/>,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider theme={theme}>
        <RouterProvider router={router}/>
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
