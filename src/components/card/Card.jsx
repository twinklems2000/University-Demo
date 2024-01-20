import { useNavigate } from "react-router-dom";
import styles from "./card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, getCourseById } from "../../redux/course/courseSlice";

const CardView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { courseData } = useSelector((state) => state.course);

  const handleDelete = (item) => {
    dispatch(deleteCourse(item));
  };

  const handleEdit = (item) => {
    dispatch(getCourseById(item));
    navigate("/form");
  };

  return (
    <div className={styles.mainContainer}>
      {courseData?.length > 0 &&
        courseData?.map((item, index) => {
          return (
            <section className={styles.articles} key={index}>
              <article>
                <div className={styles.wrapper}>
                  <div className={styles.articleBody}>
                    <h2>{item?.course}</h2>
                    <p>{item?.description}</p>
                    <div className={styles.btnContainer}>
                      <button className={styles.viewBtn}>Subjects</button>
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
                </div>
              </article>
            </section>
          );
        })}
    </div>
  );
};

export default CardView;
