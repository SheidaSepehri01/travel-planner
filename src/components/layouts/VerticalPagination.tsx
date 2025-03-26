"use client";
import clsx from "clsx";
import styles from "../../styles/modules/VerticalPagination.module.css";

export const VerticalPagination = (props: {
  count: number;
  activeIndex: number;
  onClick: (index: number) => void;
}) => {
  const { count, activeIndex, onClick } = props;
  const pageArray = Array(count)
    .fill(0)
    .map((_, index) => index);
  return (
    <div className={styles.container}>
      {pageArray.map((number) => (
        <div
          onClick={() => onClick(number)}
          key={number}
          className={clsx(
            styles.dot,
            activeIndex === number ? styles.active : styles.inactive
          )}
        />
      ))}
    </div>
  );
};
