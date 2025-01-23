import React from "react";

const Main = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('/src/photo poults/9.jpeg')", // Remplace par le chemin de ton image
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">
          Bienvenue dans mon site de ventes de poulets en ligne!
        </h1>
      </div>
    </div>
  );
};

export default Main;
