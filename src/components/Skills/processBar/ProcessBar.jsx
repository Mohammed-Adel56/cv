// import ProgressBar from "react-bootstrap/ProgressBar";
// import Row from "react-bootstrap/Row";
import "./ProcessBar.css";
const ProcessBar = (props) => {
  return (
    <>
      <div className="progress">
        <div
          role="progressbar "
          style={{ width: `${props.process}%` }}
          className="progress-bar progress-bar-secondary text-left"
        >
          <span>{props.name}</span>
        </div>
      </div>
    </>
  );
};

export default ProcessBar;
