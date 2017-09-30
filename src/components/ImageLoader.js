import React from 'react';
import PropTypes from 'prop-types';

import BlurImage from './BlurImage';
import FadeInImage from './FadeInImage';

export default class ImageLoader extends React.Component {
    static propTypes = {
        imageStyle: PropTypes.object,
        previewStyle: PropTypes.object,
        imageClassName: PropTypes.string,
        previewClassName: PropTypes.string,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        preload: PropTypes.bool.isRequired,
        onLoad: PropTypes.func.isRequired,
        delay: PropTypes.number.isRequired,
    };

    static defaultProps = {
        onLoad: () => {},
        preload: true,
        delay: 2000
    };

    state = {
        preload: typeof this.props.preload !== 'undefined' ? this.props.preload : true,
        image: null
    };

    componentDidMount() {
        setTimeout(this.loadImage, this.props.delay);
    }

    render() {
        if (this.state.preload && !this.state.image) {
            return (
                <BlurImage
                    className={this.props.previewClassName}
                    style={this.props.previewStyle}
                    height={this.props.height}
                    title={this.props.title}
                    width={this.props.width}
                    src={this.props.preview}
                    alt={this.props.alt}
                />
            );
        }

        return (
            <FadeInImage
                className={this.props.imageClassName}
                style={this.props.imageStyle}
                height={this.props.height}
                width={this.props.width}
                title={this.props.title}
                src={this.props.image}
                alt={this.props.alt}
            />
        );
    }

    handleLoad = event => {
        this.props.onLoad && this.props.onLoad(event);

        this.setState(prevState => ({
            preload: !prevState.preload,
            image: null
        }));
    };

    loadImage = () => {
        const img = new Image();

        img.onload = this.handleLoad;
        img.src = this.props.image;

        this.setState(prevState => ({
            image: img
        }));
    };
}