import { ADD_ADDRESS, DELETE_ADDRESS } from "../types/address.type";

export const addAddress = (item) => ({
  type: ADD_ADDRESS,
  payload: item,
});

export const deleteAddress = (id) => ({
  type: DELETE_ADDRESS,
  payload: id,
});
