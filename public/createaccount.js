function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    /*<div className="card text-center">
      <div className="card-header">
        <strong>Create a new account</strong>
      </div>
      <div className="card-body">
        <h6 className="card-text">Name</h6>
        <input
          type="input"
          className="form-control"
          id="name"
          placeholder="Enter your full name"
        />
        <br />
        <h6 className="card-text">Email</h6>
        <input
          type="input"
          className="form-control"
          id="email"
          placeholder="Enter your email"
        />
        <br />
        <h6 className="card-text">Password</h6>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
        />
        <br />
        <button className="btn btn-primary" id="submit" type="submit">
          Create account
        </button>
        <div id="createStatus"></div>
      </div>
    </div>*/

    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <CreateForm setShow={setShow} />
        ) : (
          <CreateMsg setShow={setShow} />
        )
      }
    />
  );
}

function CreateMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Add another account
      </button>
    </>
  );
}

function CreateForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handle() {
    console.log({ name, email, password });
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();
    props.setShow(false);
  }

  return (
    <>
      Name
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <br />
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Create Account
      </button>
    </>
  );
}
