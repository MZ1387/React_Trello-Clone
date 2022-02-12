import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from './Card';

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
        </ColumnContainer>
    );
};