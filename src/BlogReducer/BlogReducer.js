import { GET_BLOG, IS_PENDING } from "../types/types";
export const blogReducer = (state, action) => {
  switch (action.type) {
    case GET_BLOG:
      return action.payload;
    default:
      return state;
  }
};

export const pendingReducer = (state, action) => {
  switch (action.type) {
    case IS_PENDING:
      return action.payload;
    default:
      return state;
  }
};
