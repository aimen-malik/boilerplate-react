import { Outlet, Link } from "react-router";



const MainLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <hr />
      <Outlet />
    </>
  );
};

export default MainLayout;
