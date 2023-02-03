import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Task {
    id: string | undefined;
    title: string;
    status: number;
    message: string;
}

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        ADD_TASK: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        INCREASE_TASK: (state, action: PayloadAction<Task>) => {
            const existingTask = state.tasks.find((task) => task.id === action.payload.id);
            if (existingTask?.status) {
                if (existingTask.status < 3) existingTask.status += 1;
            }
        },
        DECREASE_TASK: (state, action: PayloadAction<Task>) => {
            const existingTask = state.tasks.find((task) => task.id === action.payload.id);
            if (existingTask?.status) {
                if (existingTask.status > 1) existingTask.status -= 1;
            }
        },
    },
});

export const { ADD_TASK, INCREASE_TASK, DECREASE_TASK } = tasksSlice.actions;

export default tasksSlice.reducer;
