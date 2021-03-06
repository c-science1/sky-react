import { ADD_ITEM } from './constants';
import { REMOVE_ITEM } from './constants';
import { TOGGLE_ITEM_STATUS } from './constants';
import { SET_LIST_FILTER } from './constants';
import { FILTERS } from './constants';

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: true },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: true },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      }

    case TOGGLE_ITEM_STATUS: {
     let newState = { items: []};
     newState.items = state.items.map(item => {
        if(item.id === action.id) {
          item.completed = !item.completed
        }
        return item;
      });
      return { items: [...newState.items] }
    }
    case REMOVE_ITEM: {
      let newState = { items: []};
       newState.items = state.items.filter(item => { return item.id !== action.id });
      return { items: [...newState.items] }
    }
     default:
      return state;
  }
};

export default reducer;
