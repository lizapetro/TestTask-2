import { ENTER_USER } from '../constantsAction';

const localStorage = false;

export function autorizationReducer (state = localStorage, active) {
  switch (active.type){
    case ENTER_USER:
      return true;
    default:
      return state;
  }
}