import React from "react";
import "./Date.css";

const MyCurrentYear = () => {
  // Get the current date
  const currentDate = new Date();

  // Extract the current year
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <p className="year">© {currentYear} Kobodrop. All rights reserved. </p>
      {/* You can use the currentYear variable in other ways as needed */}
    </div>
  );
};

export default MyCurrentYear;
