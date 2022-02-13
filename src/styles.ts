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

interface DragPreviewContainerProps {
    isHidden?: boolean
    isPreview?: boolean
};

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    opacity: ${(props) => (props.isHidden ? 0 : 1)};
    transform: ${(props) => props.isPreview ? 'rotate(5deg' : undefined}
`;

export const ColumnContainer = styled(DragPreviewContainer)`
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

export const CardContainer = styled(DragPreviewContainer)`
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

export const NewItemFormContainer = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const NewItemButton = styled.button`
    padding: 6px 12px;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    color: #fff;
    background-color: #5aac44;
    text-align: center;
`;

export const NewItemInput = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border: none;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const CustomDragLayerContainer = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    position: fixed;
    pointer-events: none;
`;