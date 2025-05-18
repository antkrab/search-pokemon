'use client';

import React from 'react';

interface NotFoundProps {
  searchTerm: string;
}

const NotFound: React.FC<NotFoundProps> = ({ searchTerm }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6 text-center">
      <h2 className="text-xl font-bold text-red-600 mb-2">Pokemon Not Found</h2>
      <p className="text-gray-700">
        No Pokemon matching &quot;{searchTerm}&quot; was found.
      </p>
      <p className="text-gray-600 mt-2">
        Please try another name or check your spelling.
      </p>
    </div>
  );
};

export default NotFound;