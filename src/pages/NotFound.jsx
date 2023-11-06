import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <div className="row">
          <h2 className="title">404 Error</h2>
          <h3 className="info">Page Not Found</h3>
          <Link to="/">Go to Home Page</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
