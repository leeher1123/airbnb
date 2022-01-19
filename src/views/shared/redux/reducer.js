const initialState = {
  isScroll: false,
};

export const Action = {
  Types: {
    IS_SCROLL: 'IS_SCROLL',
  },

  Creators: {
    isScroll: (payload) => ({
      type: Action.Types.IS_SCROLL,
      payload,
    }),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;

  case Action.Types.IS_SCROLL: {
    return {
      ...state,
      isScroll: action.payload,
    };
  }
  }
};

export default reducer;
