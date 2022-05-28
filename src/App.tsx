import React, { useReducer } from 'react';
import MainView from './components/MainView/MainView';
import SideNav from './components/SideNav/SideNav';

export interface Part {
  name?: string;
  code?: string;
}

export interface MyState {
  openedNav: boolean;
  openedList: boolean;
  selectedModel: string;
  selectedPart: Part;
}

const initialState = {
  openedNav: false,
  openedList: false,
  selectedModel: '',
  selectedPart: {
    name: '',
    code: '',
  },
};

const reducerFunc = (
  state: MyState,
  action: { type: string; id?: string; name?: string; code?: string }
): MyState => {
  if (action.type === 'OPEN_NAV') {
    return action.id
      ? { ...state, openedNav: !state.openedNav, selectedModel: action.id }
      : { ...state, openedNav: !state.openedNav };
  }
  if (action.type === 'PART_SELECT') {
    return { ...state, selectedPart: { name: action.name, code: action.code } };
  }
  if (action.type === 'OPEN_LIST') {
    const listState = !state.openedList;
    return { ...state, openedList: listState };
  }

  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const openNavHandler = (id: string) => {
    dispatch({ type: 'OPEN_NAV', id: id });
  };

  const listHandler = () => {
    console.log('WORKING');
    dispatch({ type: 'OPEN_LIST' });
  };

  return (
    <div>
      <SideNav openNav={openNavHandler} navState={state} />
      <MainView
        navState={state}
        onOverlayClick={openNavHandler}
        onListClick={listHandler}
        onPartSelect={part =>
          dispatch({ type: 'PART_SELECT', name: part.name, code: part.code })
        }
      />
    </div>
  );
}

export default App;
