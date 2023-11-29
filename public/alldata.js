function AllData() {
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    // fetch all accounts from API
    fetch("/account/all")
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        setData(JSON.stringify(info));
      });
  }, []);
  return (
    <>
      <h5>All data in store:</h5>
      {data}
    </>
  );
}
