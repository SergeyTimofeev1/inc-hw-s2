const initState = {
    themeId: 1,
}

export type InitialStateType = typeof  initState

export type ActionsType = ChangeThemeIdType

export const themeReducer = (state = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID" : {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export type ChangeThemeIdType = {
    type: string
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id })  // fix any
