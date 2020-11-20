import React from "react";
import Image from "react-bootstrap/Image";

import styles from "./post-card.module.scss";
import CovidTag from "./CovidTag";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headSection}>
        <Image src={post.profile} height="60" />
        <div className={styles.postDetails}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span className={styles.header}>{post.name}</span>
            <Image src="/LoginPage/star.svg" height="20" style={{ marginRight: 20 }} />
          </div>
          <CovidTag covid={post.covid} />
        </div>
      </div>
      <div className={styles.post}>{post.post} <a style={{ fontSize: 12, color: 'var(--cta)', cursor: 'pointer' }}>read more</a></div>
    </div>
  );
};
export default PostCard;
