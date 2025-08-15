// import ProgressBar from "react-bootstrap/ProgressBar";
// import Row from "react-bootstrap/Row";
import PropTypes from 'prop-types';
import "./ProcessBar.css";
const ProcessBar = (props) => {
  return (
    <>
      <div className="progress">
        <div
          role="progressbar"
          aria-valuenow={props.process}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`${props.name} skill level: ${props.process}%`}
          style={{ width: `${props.process}%` }}
          className="progress-bar progress-bar-secondary text-left"
        >
          <span>{props.name}</span>
        </div>
      </div>
    </>
  );
};

ProcessBar.propTypes = {
  name: PropTypes.string.isRequired,
  process: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProcessBar;
