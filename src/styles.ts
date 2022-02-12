import styled from 'styled-components';

export const AppContainer = styled.div`
    height: 100%;
    padding: 20px;
    width: 100%;
    background-color: #3179ba;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const ColumnContainer = styled.div`
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    padding: 8px 8px;
    border-radius: 3px;
    background-color: #ebecf0;
    flex-grow: 0;
`;

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`;

export const CardContainer = styled.div`
    max-width: 300px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    box-shadow: #091e4240;
    background-color: #fff;
    cursor: pointer;
`;

type AddItemButtonProps = {
    dark?: boolean
};

export const AddItemButton = styled.button<AddItemButtonProps>`
    width: 100%;
    max-width: 300px;
    padding: 10px 12px;
    border: none;
    border-radius: 3px;
    background-color: #ffffff3d;
    color: ${(props) => (props.dark ? '#000' : '#fff')};
    text-align: left;
    cursor: pointer;
    transition: background 85ms ease-in;
    &:hover {
        background-color: #ffffff52;
    }
`;