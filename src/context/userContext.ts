import { createContext, Dispatch, SetStateAction } from "react";
import { IPersistAuth } from "../utils/localStorage";

interface IAdminStateContext {
    adminState: IPersistAuth;
    setAdminState: Dispatch<SetStateAction<IPersistAuth>>;
}

export const AdminStateContext = createContext<IAdminStateContext | null>(null)
