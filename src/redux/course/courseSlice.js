import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseData: [
    {
      course: "Humanities",
      description: `You will be trained to think critically and ethically, as well
      as in good historical knowledge which allows you to interact in
      various spheres. Other areas include literature, art and social
      studies.`,
      id: 1,
      subject: "Languages, Literature, Philosophy",
    },
    {
      course: "Engineering",
      description: `The practical and innovative application of maths and sciences will be used to design, develop and maintain infrastructures, products and systems on a large scale.`,
      id: 2,
      subject: "Civil Engineering, Electrical",
    },
  ],
  courseInfo: {},
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    // ADD NEW COURSE

    addCourse: (state, action) => {
      state.courseData = [...state.courseData, action.payload];
    },

    // DELETE COURSE

    deleteCourse: (state, action) => {
      let filterData =
        state.courseData?.length > 0 &&
        state.courseData?.filter((item) => item.id !== action?.payload?.id);
      state.courseData = filterData;
    },

    // GET COURSE BY ID

    getCourseById: (state, action) => {
      state.courseInfo = action.payload;
    },

    // UPDATE COURSE

    updateCourse: (state, action) => {
      const { id } = action?.payload || {};

      const updatedData = state.courseData?.map((item) => {
        console.log(id, item.id);
        return item.id == id ? action?.payload : item;
      });

      state.courseData = updatedData;
    },

    // CLEAR COURSE INFO
    clearCourseInfo: (state, action) => {
      state.courseInfo = {};
    },
  },
});

export const {
  addCourse,
  deleteCourse,
  getCourseById,
  updateCourse,
  clearCourseInfo,
} = courseSlice.actions;

export default courseSlice.reducer;
