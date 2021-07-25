// store.js
import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import InitialState from "./initialState";
import { TOGGLE_MODAL } from "../config/action";

const initialState = InitialState;
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((storeState, action) => {
    switch (action.type) {
      case TOGGLE_MODAL:
        return {
          ...storeState,
          modalData: action.data,
        };
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { store, StateProvider };
