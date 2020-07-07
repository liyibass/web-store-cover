import userTypes from "./user.types";

const initialState = {
  userList: [],
  winner: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_USER_LIST: {
      console.log(action);

      return { ...state, userList: action.payload };
    }

    case userTypes.ADD_USER: {
      return { ...state, userList: [action.payload, ...state.userList] };
    }

    case userTypes.DELETE_USER: {
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user.id !== action.payload.id
        ),
      };
    }

    case userTypes.SET_WINNER: {
      const winnerId = Math.floor(Math.random() * state.userList.length);

      return { ...state, winner: state.userList[winnerId] };
    }

    case userTypes.CLEAR_WINNER: {
      return { ...state, winner: {} };
    }

    default:
      return state;
  }
};

export default userReducer;
