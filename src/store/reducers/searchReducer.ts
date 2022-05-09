import { SearchAction, SearchActionTypes, SearchState } from '../../types/searchTypes';

const initialState: SearchState = {
    searchList: [],
    searchingItem: '',
};

export const searchReducer = (state = initialState, actions: SearchAction): SearchState => {
    switch (actions.type) {
        case SearchActionTypes.SEARCH: {
            const allItems = actions.data;
            const newItems = [];
            const flag = actions.searchingFlag.trim();
            if (flag.length !== 0) {
                for (let i = 0; i < allItems.length; i++) {
                    if (allItems[i].title.indexOf(flag) !== -1 || allItems[i].body.indexOf(flag) !== -1) {
                        newItems.push(allItems[i]);
                    }
                }
            }
            return {
                ...state,
                searchList: newItems,
                searchingItem: flag,
            };
        }
        default:
            return state;
    }
};
