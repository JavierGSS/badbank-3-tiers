const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : "";
    const txt = props.txtcolor ? "text-" + props.txtcolor : "text-white";
    return "card " + txt + " " + bg + " primary mb-3 mx-auto";
  }
  return (
    <>
      <br />
      <div
        className={classes()}
        style={{ maxWidth: "22rem", textAlign: "center" }}
      >
        <div className="card-header">
          <strong>{props.header}</strong>
        </div>
        <div className="card-body">
          {props.title && (
            <h5 style={{ textAlign: "center" }} className="card-title">
              <strong>{props.title}</strong>
            </h5>
          )}
          {props.text && (
            <p style={{ textAlign: "center" }} className="card-text">
              <strong>{props.text}</strong>
            </p>
          )}
          {props.body}
          {props.status && (
            <div id="create-status" style={{ textAlign: "center" }}>
              {props.status}
            </div>
          )}
        </div>
      </div>
      <div style={{ height: "8px" }} />
    </>
  );
}
