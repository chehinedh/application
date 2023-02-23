import React, { useState, useEffect } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function componentDidCatch(error, info) {
      setHasError(true);
      setErrorMessage(error);
    }
    componentDidCatch();
  }, []);

  if (hasError) {
    return <h1>{errorMessage}</h1>;
  } else {
    return props.children;
  }
}

export default ErrorBoundary;
