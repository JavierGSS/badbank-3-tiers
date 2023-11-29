function Login() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <strong>Log in to account</strong>
      </div>
      <div className="card-body">
        <h6 className="card-text">Email</h6>
        <input
          type="input"
          className="form-control"
          id="loginEmail"
          placeholder="Enter your email"
        />
        <br />
        <h6 className="card-text">Password</h6>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          placeholder="Enter your password"
        />
        <br />
        <a href="#" className="btn btn-primary" id="submit" type="submit">
          Login
        </a>
        <div id="loginStatus"></div>
      </div>
    </div>
  );
}
