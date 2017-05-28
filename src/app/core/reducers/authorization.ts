import { ActionReducer, Action } from '@ngrx/store';

export const USER_SIGN_IN = 'USER_SIGN_IN';

export function userSingIn(state, action: Action) {
	return {
	    type: 'USER_SIGN_IN',
	    payload: action.payload
	}
}
