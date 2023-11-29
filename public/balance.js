function Balance() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <strong>Balance</strong>
      </div>
      <div className="card-body">
        <h6 className="card-text">Email</h6>
        <input
          type="input"
          className="form-control"
          id="balanceEmail"
          placeholder="Enter your email"
        />
        <br />
        <h6 className="card-text">Password</h6>
        <input
          type="password"
          className="form-control"
          id="balancePassword"
          placeholder="Enter your password"
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Show Balance
        </button>
        <div id="balanceStatus"></div>
      </div>
    </div>
  );
}
