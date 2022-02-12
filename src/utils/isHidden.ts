// calculate if we need to hide the column

import { DragItem } from "../DragItem";

export const isHidden = (draggedItem: DragItem, itemType: string, id: string): boolean => {
    return Boolean(
        draggedItem 
        && draggedItem.type === itemType
        && draggedItem.id === id
    );
};