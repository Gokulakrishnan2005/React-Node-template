import React from 'react';

const Page = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-gray-800 text-white p-4 flex justify-center items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </header>
      <main className="p-8 max-w-screen-md w-full">
        <div className="bg-white p-8 rounded-lg shadow-md">{children}</div>
      </main>
    </div>
  );
};

export default Page;