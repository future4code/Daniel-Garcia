import React from "react";
import useprotectedPage from "../../hooks/useProtectedPage"


function PostPage() {
 useprotectedPage()

  return (
<div>PostPage!</div>
  );
}

export default PostPage;
