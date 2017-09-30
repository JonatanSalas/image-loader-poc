import styled from 'styled-components';

const BlurImage = styled.img`
    background-size: 'cover';
    background-repeat: 'no-repeat';
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '200px'};
    filter: ${props => props.amplitude ? `blur(${props.amplitude}px)` : `blur(30px)`};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#9E9E9E'};
`;

export default BlurImage;