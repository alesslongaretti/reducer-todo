export const initialState = [
  {
    title: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { title: action.payload, completed: false, id: Date.now() }
      ];
      case "TOGGLE":
        return state.map(item => 
          item.id === action.id ? { ...item, completed: !item.completed} : item)
    default:
      return state;
  }
};
