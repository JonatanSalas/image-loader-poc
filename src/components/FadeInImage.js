import styled from 'styled-components';

//TODO add fade-in transition for better-ux
const FadeInImage = styled.img`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '200px'};
`;

export default FadeInImage;