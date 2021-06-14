import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div
      className="loading"
    >
      <img
        src="/poke_loading.gif"
        alt="loading"
      />
    </div>
  );
}

export default Loading;
