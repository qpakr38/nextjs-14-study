import Link from "next/link";

const SideNavigator = () => {
  return (
    <>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </>
  );
};
export default SideNavigator;
