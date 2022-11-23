
import { createReducer } from "@reduxjs/toolkit";

import {

  } from "./action";

export interface Profile {
    user: any
  }
  
  export const initialState: Profile = {
    user: "",
  };

  export default createReducer<Profile>(initialState, (builder) =>
  builder
   
    .addDefaultCase((state) => state)
);
