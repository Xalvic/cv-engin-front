import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Experience {
  id: string;
  company: string;
  position: string;
  daterange: string;
  companyLocation: string;
  companyWebsite: string;
  companySummary: string;
}

interface Profile {
  id: string;
  platform: string;
  url: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
}
// interface ListItem<T = Record<string, any>> {
//   id: number;
//   data: T;
// }

interface ResumeDataState {
  fullname: string;
  headline: string;
  email: string;
  website: string;
  phone: string;
  location: string;
  summary: string;
  experiences: Experience[];
  profiles: Profile[];
  certificates: Certificate[];
  skills: string[];
}

const initialState: ResumeDataState = {
  fullname: "",
  headline: "",
  email: "",
  website: "",
  phone: "",
  location: "",
  summary: "",
  experiences: [],
  profiles: [],
  certificates: [],
  skills: []
};

const resumeDataSlice = createSlice({
  name: "resume-data",
  initialState,
  reducers: {
    addBasicInfo: (state, action: PayloadAction<Partial<ResumeDataState>>) => {
      return { ...state, ...action.payload };
    },
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experiences.push(action.payload);
    },
    updateExperience: (state, action: PayloadAction<Experience>) => {
      const index = state.experiences.findIndex(
        (exp) => exp.id === action.payload.id
      );
      if (index !== -1) {
        state.experiences[index] = action.payload;
      }
    },
    removeExperience: (state, action: PayloadAction<string>) => {
      state.experiences = state.experiences.filter(
        (exp) => exp.id !== action.payload
      );
    },
  },
});

export const {
  addBasicInfo,
  addExperience,
  updateExperience,
  removeExperience,
} = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
