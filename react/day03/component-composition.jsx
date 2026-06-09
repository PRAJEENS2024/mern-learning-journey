import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {

    return <h1>Header Section</h1>;

};

const Footer = () => {

    return <h2>Footer Section</h2>;

};

const App = () => {

    return (

        <>

            <Header />

            <p>
                Main Content
            </p>

            <Footer />

        </>

    );

};

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);