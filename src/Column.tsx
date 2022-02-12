import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './state/AppStateContext';
import { useRef } from 'react';
import { useItemDrag } from './utils/useItemDrag';
import { useDrop } from "react-dnd";
import { throttle } from 'throttle-debounce-ts';
import { moveList, addTask } from './state/actions';
import { isHidden } from './utils/isHidden';

// define the form of your props object
type ColumnProps = {
    id: string
    text: string
};

export const Column = ({ text, id }: ColumnProps) => {

    const { draggedItem, getTasksByListId, dispatch } = useAppState();
    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: 'COLUMN',
        hover: throttle(200, () => {

            if (!draggedItem) {
                return;
            }

            if (draggedItem.type === 'COLUMN') {

                if (draggedItem.id === id) {
                    return;
                }

                dispatch(moveList(draggedItem.id, id));
            }
        })
    });

    const tasks = getTasksByListId(id);

    const { drag } = useItemDrag({ type: 'COLUMN', id, text });

    drag(drop(ref));

    return (
        <ColumnContainer 
            ref={ref} 
            isHidden={isHidden(draggedItem, 'COLUMN', id)} 
        >
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