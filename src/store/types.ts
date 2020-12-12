import { AuthAction, IAuthState } from './modules/auth/types'

export interface IStoreState {
  auth: IAuthState
}

export type StoreAction = AuthAction