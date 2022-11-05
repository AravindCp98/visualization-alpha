import { createContext } from "react";

export interface IuserComment  {
    // body: string|undefined
    // email: string | undefined
    // id: number | undefined
    // name: string | undefined
    // postId: number | undefined
    stringVal:string
}
export const UserComment = createContext<IuserComment>({} as IuserComment);