function Withdraw() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <strong>Withdraw</strong>
      </div>
      <div className="card-body">
        <h6 className="card-text">Email</h6>
        <input
          type="input"
          className="form-control"
          id="withdrawEmail"
          placeholder="Enter your email"
        />
        <br />
        <h6 className="card-text">Password</h6>
        <input
          type="password"
          className="form-control"
          id="withdrawPassword"
          placeholder="Enter your password"
        />
        <br />
        <h6 className="card-text">Enter amount</h6>
        <input
          type="number"
          className="form-control"
          id="withdrawAmount"
          placeholder="Enter amount"
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Withdraw
        </button>
        <div id="withdrawStatus"></div>
      </div>
    </div>
  );
}
