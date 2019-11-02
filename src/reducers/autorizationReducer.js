import { ENTER_USER, EXIT_USER } from '../constantsAction';

const localStorage = false;

export function autorizationReducer (state = localStorage, active) {
  switch (active.type){
    case ENTER_USER:
      return true;
    case EXIT_USER:
      return false;
    default:
      return state;
  }
}