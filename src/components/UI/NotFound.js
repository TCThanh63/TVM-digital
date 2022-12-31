import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="not-found">
    <img
      src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
      alt="not-found"
    />
    <div className="justify-content-center">
      <Link className="btn btn-primary" to="/">Go To HomePage</Link>
    </div>
  </div>
);

export default NotFound;
