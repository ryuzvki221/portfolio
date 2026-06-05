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
            <Link href="/" className="btn-custom" style={{ padding: "0.75rem 1.5rem", backgroundColor: "#ffb400", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
