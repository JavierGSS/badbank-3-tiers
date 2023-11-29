function Deposit() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <strong>Deposit</strong>
      </div>
      <div className="card-body">
        <h6 className="card-text">Email</h6>
        <input
          type="input"
          className="form-control"
          id="depositEmail"
          placeholder="Enter your email"
        />
        <br />
        <h6 className="card-text">Password</h6>
        <input
          type="password"
          className="form-control"
          id="depositPassword"
          placeholder="Enter your email"
        />
        <br />
        <h6 className="card-text">Enter amount</h6>
        <input
          type="number"
          className="form-control"
          id="depositAmount"
          placeholder="Enter amount"
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Deposit
        </button>
        <div id="depositStatus"></div>
      </div>
    </div>
  );
}
