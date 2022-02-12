import { createContext, useContext, FC } from "react";

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
};

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
);

const appData: AppState = {
    lists: [
        {
            id: '0a',
            text: 'task one',
            tasks: [{ id: 'c0', text: 'one...'}]
        },
        {
            id: '0b',
            text: 'task two',
            tasks: [{ id: 'c1', text: 'two...'}]
        },
        {
            id: '0c',
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

export const useAppState = () => {
    return useContext(AppStateContext);
};