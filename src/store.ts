import { configureStore } from "@reduxjs/toolkit";
import resumeDataSlice from "@/features/resumeDataSlice";

export const store = configureStore({
  reducer: {
    resumeData: resumeDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;