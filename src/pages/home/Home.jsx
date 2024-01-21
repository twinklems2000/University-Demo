import React, { useEffect, useState } from "react";
import CardView from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import ListView from "../../components/list-view/ListView";
import { clearCourseInfo } from "../../redux/course/courseSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    dispatch(clearCourseInfo());
  }, []);

  return (
    <>
      <div className={styles.buttonContainer}>
        <h1>M&S University </h1>
        <div>
          <button onClick={() => navigate("/form")}>Add New Course</button>
          <button onClick={() => setShowList(!showList)}>
            {!showList ? "List View" : "Grid View"}
          </button>
        </div>
      </div>
      {showList ? <ListView /> : <CardView />}
    </>
  );
};

export default Home;
