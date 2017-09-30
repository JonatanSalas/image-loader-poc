import React from 'react';
import PropTypes from 'prop-types';

import BlurImage from './BlurImage';
import FadeInImage from './FadeInImage';

export default class ImageLoader extends React.Component {
    static propTypes = {
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageStyle: PropTypes.object,
        previewStyle: PropTypes.object,
        imageClassName: PropTypes.string,
        previewClassName: PropTypes.string,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        preload: PropTypes.bool.isRequired,
        onLoad: PropTypes.func.isRequired,
        delay: PropTypes.number.isRequired,
    };

    static defaultProps = {
        onLoad: null,
        preload: true,
        delay: 2000
    };

    state = {
        preload: typeof this.props.preload !== 'undefined' ? this.props.preload : true,
        image: null
    };

    componentDidMount() {
        setTimeout(() => this.loadImage(), this.props.delay);
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

        this.setState(prevState => ({ preload: !prevState.preload }))
    };

    loadImage = () => {
        const image = new Image();

        image.onload = this.handleLoad;
        image.src = this.props.image;

        this.setState(prevState => ({ image }));
    };
}