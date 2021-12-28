import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import styled from "styled-components";

const TabHeader = ({ value, setTab }) => {
  return (
    <div className={styles.tab_header}>
      <items
        className={classnames([styles.items, value === 1 && styles.selected])}
        onClick={() => setTab(1)}
      >
        Mes Competences
      </items>
      <span
        className={classnames([styles.items, value === 2 && styles.selected])}
        onClick={() => setTab(2)}
      >
        Mes Experiences
      </span>
    </div>
  );
};

export default TabHeader;
