import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome back {name}
      </Link>
    );
  }
  return (
    <Link href="/login" className="btn btn-primary">
      Login
    </Link>
  );
};

export default ButtonLogin;
