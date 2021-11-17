// Root reducer
import { combineReducers } from "redux";
import { pokemonApi, moviesApi } from "./movie";
import search from "./search";

export default combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [moviesApi.reducerPath] : moviesApi.reducer,
  search
})