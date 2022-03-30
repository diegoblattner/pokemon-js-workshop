// https://a11y-dialog.netlify.app/
import React, { useRef } from "react";
import styles from "./Modal.module.css";

export const Modal = ({
  isOpen,
  title,
  onClose,
  children,
}) => {
  const overlayRef = useRef(null);
  const onOverlayClick = (ev) => {
    if (ev.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div className={styles.container} aria-hidden={isOpen ? "false" : "true"}>
      <div ref={overlayRef} className={styles.overlay} onClick={onOverlayClick}>
        <div className={styles.dialog}>
          {title && <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
          </div>}
          <div className={styles.content}>
            {children}
          </div>
          <button type="button" className={styles.close} onClick={onClose}>X</button>
        </div>
      </div>
    </div>
  )  
};
