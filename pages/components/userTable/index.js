const UserTable = (props) => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
          marginBottom: "50px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>USER TABLE</span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: "400",
            color: "red",
            cursor: "pointer",
          }}
          onClick={props.logout}
        >
          logout
        </span>
      </div>
      {props.userData && props.userData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no.</th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.userData &&
              props.userData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.date}</td>
                  <td>{data.name}</td>
                  <td>{data.mobile}</td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleDelete(data)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <h1 style={{ textAlign: "center" }}>No Data Found</h1>
      )}
    </div>
  );
};
export default UserTable;
