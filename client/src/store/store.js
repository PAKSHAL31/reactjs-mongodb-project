import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminEventsSlice from "./admin/event-slice"
import userEventSlice from "./user/event-slice"
import registeredUserEvents from "./user/registeredevents-slice";
import userAddress from "./user/address-slice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        adminEvents: adminEventsSlice,
        userEvents: userEventSlice,
        registeredUserEvents: registeredUserEvents,
        userAddress: userAddress
    }
})


export default store;