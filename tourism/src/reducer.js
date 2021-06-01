function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    return {...state, tours: [...state.tours, action.payload]};
  }

  if (action.type === "REMOVE_ITEM") {
    return {...state, tours: state.tours.filter((item) => { return item.id != action.payload })};
  }

  if (action.type === "HAVE_TOURS") {
    return {...state, toursAvailable: true, headerText: "Our Tours"};
  }

  if (action.type === "NO_TOURS") {
    return {...state, toursAvailable: false, headerText: "No Tours Available"};
  }

  if (action.type === "LOADING") {
    return {...state, headerText:"Loading..."};
  }

  return state;
}

export default reducer;
