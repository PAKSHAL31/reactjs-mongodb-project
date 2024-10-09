import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminEventsSlice from "./admin/event-slice"
import userEventSlice from "./user/event-slice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        adminEvents: adminEventsSlice,
        userEvents: userEventSlice
    }
})


export default store;