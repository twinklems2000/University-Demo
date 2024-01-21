import { useDispatch, useSelector } from "react-redux";
import styles from "./listView.module.scss";
import { deleteCourse, getCourseById } from "../../redux/course/courseSlice";
import { useNavigate } from "react-router-dom";

const ListView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseData } = useSelector((state) => state.course);

  //  delete function

  const handleDelete = (item) => {
    dispatch(deleteCourse(item));
  };

  //  edit function

  const handleEdit = (item) => {
    dispatch(getCourseById(item));
    navigate("/form");
  };

  return (
    <>
      <div className={styles.mainContainer}>
        {courseData?.length > 0 &&
          courseData?.map((item, index) => {
            return (
              <div className={styles.listStyle} key={index}>
                <div className={styles.infoText}>
                  <h2>{item?.course}</h2>
                  <p>{item?.description}</p>
                  <div className={styles.listContainer}>
                    <p className={styles.titleText}>Subjects</p>
                    {item?.subject?.split(",")?.map((subject, id) => {
                      return <p key={id}>{subject}</p>;
                    })}
                  </div>
                </div>

                <div className={styles.btnContainer}>
                  <button
                    className={styles.buttonStyle}
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListView;
