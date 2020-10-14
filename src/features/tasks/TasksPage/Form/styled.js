import styled from 'styled-components';

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 787px) {
        grid-template-columns: 1fr;
}`;

export const Button = styled.button`
    border: none;
    background-color: hsl(180, 100%, 25%);
    color: white;
    padding: 10px;
    transition: background-color .3s, transform .3s;

    &:hover {
    background-color: hsl(180, 100%, 30%);
    cursor: pointer;
    transform: scale(1.2);
    }

    &:active {
    background-color: hsl(180, 100%, 20%);
    }
`;