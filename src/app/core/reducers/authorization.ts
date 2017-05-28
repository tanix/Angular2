import { ActionReducer, Action } from '@ngrx/store';

export const USER_SIGN_IN = 'USER_SIGN_IN';

export function userSingIn(payload: T) {
	return {
	    type: 'USER_SIGN_IN',
	    payload: payload
	}
}
