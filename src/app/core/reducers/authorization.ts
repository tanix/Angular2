import { ActionReducer, Action } from '@ngrx/store';

export const UPDATESTORAGE = 'UPDATESTORAGE';
export const REMOVESTORAGE = 'REMOVESTORAGE';

export function authorizationReducer(item, action: Action) {
	switch (action.type) {
		case UPDATESTORAGE:
				if (action.payload.token !== localStorage.getItem("token")) {
					localStorage.setItem("token", action.payload.token);
					localStorage.setItem("email", action.payload.email);
				}
				break;

		case REMOVESTORAGE:

			localStorage.removeItem("token");
			localStorage.removeItem("email");

			break;
	}
}
