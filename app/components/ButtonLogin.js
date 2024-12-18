import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  }
  return (
    <Link
      href="/login"
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
    >
      Login
    </Link>
  );
};

export default ButtonLogin;
