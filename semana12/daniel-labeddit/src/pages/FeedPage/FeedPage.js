import React from "react";
import useprotectedPage from "../../hooks/useProtectedPage"

function FeedPage() {
  useprotectedPage()
  return (
<div>FeedPage!</div>
  );
}

export default FeedPage;

