 const todoReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return { ...state, data: [...state.list, { id: id, data: data }] };

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "REMOVE_TODO":
      return [];

    default:
      return state;
  }
};
export default todoReducers;