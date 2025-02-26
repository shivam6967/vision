import { Link } from "react-router-dom";
import React from 'react'

const Sample = () => {
  return (
    <div>
      <h1>Sample Page</h1>
      <Link to="/eventone">Go to Event One</Link>
      <Link to="/eventtwo">Go to Event Two</Link>
    </div>
  );
};

export default Sample;
