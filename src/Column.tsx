import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './state/AppStateContext';
import { addTask } from './state/actions';

// define the form of your props object
type ColumnProps = {
    id: string
    text: string
};

export const Column = ({ text, id }: ColumnProps) => {

    const { getTasksByListId, dispatch } = useAppState();
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
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    );
};