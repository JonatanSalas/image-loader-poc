import React from "react";
import ReactDOM from "react-dom";

import ImageLoader from './components/ImageLoader';

const styles = {
    margin: 0,
    padding: 0,
    fontFamily: "sans-serif",
    textAlign: "center"
};

const App = () =>
    <div style={styles}>
        <ImageLoader
            alt="UNO"
            title="UNO"
            width="100%"
            height="413px"
            image="https://static.pre.uno.com.ar/adjuntos/201/imagenes/000/010/0000010616.jpg"
            preview="https://static.pre.uno.com.ar/adjuntos/201/imagenes/000/010/0000010620.jpg"
        />
        <ImageLoader
            alt="UNO"
            title="UNO"
            width="100%"
            height="274px"
            image="https://static.pre.uno.com.ar/adjuntos/201/imagenes/000/010/0000010630.jpg"
            preview="https://static.pre.uno.com.ar/adjuntos/201/imagenes/000/010/0000010634.jpg"
        />
    </div>;


ReactDOM.render(<App />, document.getElementById("root"));
