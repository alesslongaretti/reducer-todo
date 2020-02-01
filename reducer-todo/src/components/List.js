import React, { useState, useReducer } from "react";

import { initialState, listReducer} from '../reducers/App';

const List = () => {
    const [state, dispatch] = useReducer(listReducer, initialState);

    const [newList, setNewList] = useState('');


}

export default List;