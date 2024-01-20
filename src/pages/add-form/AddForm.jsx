import { useForm } from "react-hook-form";
import styles from "./addForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, updateCourse } from "../../redux/course/courseSlice";

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseData, courseInfo } = useSelector((state) => state.course);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      course: courseInfo?.course,
      description: courseInfo?.description,
      subject: courseInfo?.subject,
    },
  });

  const onSubmit = (data) => {
    let newItem = {
      ...data,
      id:
        courseInfo?.id !== undefined ? courseInfo?.id : courseData?.length + 1,
    };
    if (courseInfo?.id !== undefined) {
      dispatch(updateCourse(newItem));
      navigate("/");
    } else {
      dispatch(addCourse(newItem));
      navigate("/");
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h2>Add Course</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fieldLabelContainer}>
            <label>Course</label>
            <div className={styles.fieldContainer}>
              <input
                type="text"
                placeholder="Enter Course Name"
                {...register("course", { required: true })}
                aria-invalid={errors.course ? "true" : "false"}
              />
              {errors.course?.type === "required" && (
                <p role="alert" className={styles.errorStyle}>
                  Course is required
                </p>
              )}
            </div>
          </div>
          <div className={styles.fieldLabelContainer}>
            <label>Description</label>
            <div className={styles.fieldContainer}>
              <input
                type="text"
                placeholder="Enter Course Description"
                {...register("description", { required: true })}
                aria-invalid={errors.description ? "true" : "false"}
              />
              {errors.description?.type === "required" && (
                <p role="alert" className={styles.errorStyle}>
                  Description is required
                </p>
              )}
            </div>
          </div>
          <div className={styles.fieldLabelContainer}>
            <label>Subjects</label>
            <div className={styles.fieldContainer}>
              <input
                type="text"
                placeholder="Enter Subject Name"
                {...register("subject", { required: true })}
                aria-invalid={errors.subject ? "true" : "false"}
              />
              {errors.subject?.type === "required" && (
                <p role="alert" className={styles.errorStyle}>
                  Subject is required
                </p>
              )}
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button type="submit">Submit</button>
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddForm;
