import { createContext, useContext, Dispatch, FC } from "react";
import { appStateReducer, AppState, List, Task } from './appStateReducer';
import { Action } from './actions';
import { useImmerReducer } from 'use-immer';

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
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
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);

    const { lists } = state;

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    };

    return (
        <AppStateContext.Provider 
            value={{ lists, getTasksByListId, dispatch }}
        >
            {children}
        </AppStateContext.Provider>
    );
};

export const useAppState = () => {
    return useContext(AppStateContext);
};