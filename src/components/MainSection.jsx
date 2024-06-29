import PropTypes from 'prop-types';
import styles from "../styles/section.module.css";

export const MainSection = ({ children }) => {
  return <section className={styles.mainSection}>{children}</section>;
};

MainSection.propTypes = {
  children: PropTypes.node.isRequired,
};
