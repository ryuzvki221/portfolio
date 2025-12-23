import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-section">
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1 style={{ fontSize: "8rem", fontWeight: "bold", color: "#ffb400" }}>404</h1>
            <h2>Page Not Found</h2>
            <p style={{ marginBottom: "2rem" }}>
              The page you are looking for does not exist.
            </p>
            <Link href="/" className="btn-custom">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
