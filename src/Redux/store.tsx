import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "./tasksSlice";

export const store = configureStore({
    reducer: {
        myTasks: TasksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
