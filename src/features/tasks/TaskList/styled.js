import styled, { css } from 'styled-components';

export const Tasks = styled.ul`
    list-style: none;
    padding: 0;
`;

export const TaskItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;
    margin-bottom: 20px;

    ${(props) => props.hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .3s;

    ${(props) => props.toggle && css`
        background: hsl(120, 100%, 25%);

        &:hover {
            background: hsl(120, 100%, 30%);
            cursor: pointer;
        }
    `}

    ${(props) => props.remove && css`
        background: hsl(0, 100%, 50%);

        &:hover {
            background: hsl(0, 100%, 40%);
            cursor: pointer;
        }
    `}
`;

export const TaskContent = styled.span`

    ${(props) => props.done && css`
        text-decoration: line-through;
    `}
`;