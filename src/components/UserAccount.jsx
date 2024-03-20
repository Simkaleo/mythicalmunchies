// This page has the login information

function UserAccount({ token }) {
  return (
    <>
      {token && " "}
      <div>
        <h1>User Account</h1>
      </div>
    </>
  );
}
export default UserAccount;
