import {UserType} from '../HW8'
import User from "../User";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export type SortByNameType = { type: 'sort'; payload: SortValuesType }

export type SortValuesType = 'up' |'down'


export type CheckAgeAcType = { type: 'check'; payload: number }

export type HomeWorkReducerActionType = SortByNameType | CheckAgeAcType

const initialState: UserType[] = [
    // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state: UserType[] = initialState, action: HomeWorkReducerActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const compareFn = (a:UserType, b:UserType) => {
                return action.payload === 'down' ? a.age - b.age : b.age - a.age
            }

            return [...state].sort(compareFn)// need to fix
        }
        case 'check': {
            return [...state].filter(u => u.age > 18) // need to fix
        }
        default:
            return [...state]
    }
}

export const sortByNameAc = (payload: SortValuesType): SortByNameType => {
    return {type: 'sort', payload}
}

export const checkAgeAc = (payload: number): CheckAgeAcType => {
    return {type: 'check', payload}
}

