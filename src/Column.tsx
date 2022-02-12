import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';

// define the form of your props object
type ColumnProps = {
    text: string
};

export const Column = ({ text }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text='task one' />
            <Card text='task two' />
            <Card text='task three' />
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    );
};