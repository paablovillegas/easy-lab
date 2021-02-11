import { Types } from "../types/types";

export const authReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Types.LOGIN:
            return {
                uid: payload.uid,
                name: payload.name,
            }
        case Types.LOGOUT:
            return {};
        default:
            return state;
    }
}