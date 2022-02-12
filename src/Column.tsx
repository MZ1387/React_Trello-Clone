import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './state/AppStateContext';

// define the form of your props object
type ColumnProps = {
    id: string
    text: string
};

export const Column = ({ text, id }: ColumnProps) => {

    const { getTasksByListId } = useAppState();
    const tasks = getTasksByListId(id);

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {
                tasks.map((task) => (
                    <Card 
                        id={task.id}
                        key={task.id}
                        text={task.text}
                    />
                ))
            }
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    );
};