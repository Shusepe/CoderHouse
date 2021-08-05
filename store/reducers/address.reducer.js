import { ADD_ADDRESS, DELETE_ADDRESS } from "../types/address.type";

const INITIAL_STATE = {
  listOfAddress: [],
};

const AddressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        listOfAddress: [...state.listOfAddress, action.payload],
      };

    case DELETE_ADDRESS:
      return {
        ...state,
        listOfAddress: state.listOfAddress.filter(
          (item) => item.id != action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default AddressReducer;
