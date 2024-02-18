import React from "react";

type Props = {};

const PostFooterDevMode = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="justify-center flex items-center mb-6">
      <p className="text-gray-400">All Rights Reserved &copy; {currentYear} Luxville Apartments. </p>
    </div>
  );
};

export default PostFooterDevMode;
