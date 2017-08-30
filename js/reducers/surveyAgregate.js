const widgits =(state = [], action) => {
  switch (action.type) {
    case 'RESET':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state;
  }
}

export default widgits;
