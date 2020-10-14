import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border: none;
    color: hsl(180, 100%, 35%);
    font-weight: 300;
    transition: color .3s;

    &:disabled{
        color: grey;
        cursor: initial;
    }

    &:hover{
        color: hsl(180, 100%, 45%);
        cursor: pointer;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    @media(max-width:787px) {
        grid-template-columns: 1fr;
}
`;