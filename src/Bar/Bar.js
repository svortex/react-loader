import React from "react";
import styles from "./styles.css";

const Bar = props => (
  <>
    <style>{`${styles}`}</style>
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
);

export default Bar;
