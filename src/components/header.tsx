import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link href="/">
        <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      </Link>
      <h1>Welcome to this NextJS Course!</h1>
    </>
  );
};
export default Header;
