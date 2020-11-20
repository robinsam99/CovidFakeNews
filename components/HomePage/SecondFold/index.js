import React from "react";
import styles from "./second-fold.module.scss";
import PostCard from "./PostCard";
import {postObj} from './post-obj';

const SecondFold = () => {
  return (
    <div className={styles.container}>
      {postObj.map((post, index) => {
        return (
          <div key={index}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};
export default SecondFold;
