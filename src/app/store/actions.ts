import {createAction, props} from '@ngrx/store';
import {AuthObj, Todo} from "./interfaces";

export const ActionSubmit = createAction('[Todo Component] Action Login submit', props<{ state: AuthObj}>());
export const LoginSuccess = createAction('[Todo Component] Login success', props<{ state: AuthObj}>());

export const loadMyData = createAction('[Todo Component] Load Data');
export const noData = createAction('[Todo Component] No data', props<{ state: boolean }>());
export const loadMyDataSuccess = createAction('[Todo Component] Load Data Success', props<{ response: Todo[], state: boolean }>());
export const loadMyDataError = createAction('[Todo Component] Load Data Error', props<{ error: any }>());

export const AddData = createAction('[Todo Component] Add Data',props<{id: number, text: string}>());
export const AddDataSuccess = createAction('[Todo Component] Add data successfully', props<{id: number, text: string}>());

export const Reply = createAction('[Todo Component] Reply', props<{text: string, id: number}>());

export const Remove = createAction('[Todo Component] Remove', props<{id: number}>());
export const RemoveDataSuccess = createAction('[Todo Component] Remove data successfully', props<{id: number}>());

export const Toggle = createAction('[Todo Component] Toggle', props<{id: number}>());
