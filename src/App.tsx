import React, { useReducer } from 'react';
import MainView from './components/MainView/MainView';
import SideNav from './components/SideNav/SideNav';

export interface Part {
  name?: string;
  code?: string;
}

export interface MyState {
  openedNav: boolean;
  selectedModel: string;
  selectedPart: Part;
}

const initialState = {
  openedNav: false,
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
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  console.log(state);

  const openNavHandler = (id: string) => {
    dispatch({ type: 'OPEN_NAV', id: id });
  };

  return (
    <div>
      <SideNav openNav={openNavHandler} navState={state} />
      <MainView
        navState={state}
        onOverlayClick={openNavHandler}
        onPartSelect={part =>
          dispatch({ type: 'PART_SELECT', name: part.name, code: part.code })
        }
      />
    </div>
  );
}

export default App;
