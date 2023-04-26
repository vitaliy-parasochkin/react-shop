import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="error-wrapper">
            Something gone wrong <Link to="/products">Go to the main page</Link>
        </div>
    );
}
