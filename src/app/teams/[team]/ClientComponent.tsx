"use client"; // This marks it as a client-side component

import React from "react";

const ClientComponent = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">Client-Side Component</h2>
      <p>This component only renders on the client side.</p>
    </div>
  );
};

export default ClientComponent;
