import React from "react";
import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="flex flex-col items-center gap-4 p-8 rounded-lg shadow-lg bg-base-100 border border-base-content/10">
        <AlertTriangle className="text-error" size={48} />
        <h1 className="text-4xl font-bold text-error">404 - Page Not Found</h1>
        <p className="text-base-content text-lg text-center max-w-md">
          The page or endpoint you are looking for does not exist.
          <br />
          Please check the URL or return to the homepage.
        </p>
        <Link to="/" className="btn btn-primary mt-4">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
