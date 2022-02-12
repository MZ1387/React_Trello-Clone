import { createContext, useContext, FC } from "react";

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
};

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
);

type Task = {
    id: string
    text: string
};

type List = {
    id: string
    text: string
    tasks: Task[]
};

export type AppState = {
    lists: List[]
};

const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'task one',
            tasks: [{ id: 'c0', text: 'one...'}]
        },
        {
            id: '0',
            text: 'task two',
            tasks: [{ id: 'c1', text: 'two...'}]
        },
        {
            id: '0',
            text: 'task three',
            tasks: [{ id: 'c2', text: 'three...'}]
        }
    ]
};

export const AppStateProvider: FC = ({ children }) => {
    const { lists } = appData;

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    };

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>
            {children}
        </AppStateContext.Provider>
    );
};