export const createAction = (type: string) => (payload?: any) => ({
  type,
  payload,
})

export interface ActionType {
  type: string
  payload: any
}
