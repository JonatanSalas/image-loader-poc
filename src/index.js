import React from "react";
import PropTypes from 'prop-types';
import { render } from "react-dom";

const styles = {
    margin: 0,
    padding: 0,
    fontFamily: "sans-serif",
    textAlign: "center"
};

const App = () =>
    <div style={styles}>
        <ImageLoader
            width="100%"
            height="413px"
            image="https://static.pre.uno.com.ar/adjuntos/201/imagenes/000/010/0000010616.jpg"
            preview="https://static.pre.uno.com.ar/adjuntos/201/imagenes/000/010/0000010620.jpg"
        />
        <ImageLoader
            width="100%"
            height="274px"
            image="https://static.pre.uno.com.ar/adjuntos/201/imagenes/000/010/0000010630.jpg"
            preview="https://static.pre.uno.com.ar/adjuntos/201/imagenes/000/010/0000010634.jpg"
        />
    </div>;

class ImageLoader extends React.Component {
    state = {
        preload: this.props.preload !== undefined ? this.props.preload : true,
        image: null
    };

    static propTypes = {
        preload: PropTypes.bool.isRequired,
        onLoad: PropTypes.func.isRequired,
        delay: PropTypes.number.isRequired,
    };

    static defaultProps = {
        onLoad: () => {},
        preload: true,
        delay: 2000
    };

    componentDidMount() {
        setTimeout(() => this.loadImage(), this.props.delay);
    }

    render() {
        if (this.state.preload && !this.state.image) {
            return <BlurImage src={this.props.preview} width={this.props.width} height={this.props.height}/>;
        }

        //TODO add fade-in transition
        return <Img src={this.props.image} width={this.props.width} height={this.props.height}/>;
    }

    handleLoad = event => {
        if (this.props.onLoad) {
            this.props.onLoad(event);
        }

        this.setState(prevState => ({ preload: false }))
    };

    loadImage = () => {
        const image = new Image();

        image.onload = this.handleLoad;
        image.src = this.props.image;

        this.setState(prevState => ({
            ...prevState,
            image
        }))
    };
}

class BlurImage extends React.Component {
    render() {
        return (
            <Img
                src={this.props.src}
                style={{
                      width: this.props.width,
                      height: this.props.height,
                      backgroundColor: "grey",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      filter: "blur(30px)"
                }}
          />
    );
  }
}

const Img = props =>
    <img
        alt={props.alt}
        src={props.src}
        title={props.title}
        style={props.style}
        width={props.width}
        height={props.height}
        className={props.className}
    >
        {props.children}
    </img>;

render(<App />, document.getElementById("root"));
