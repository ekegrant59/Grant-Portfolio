'use client';
import React from 'react';

export default function Button({ text, onClick, color = 'main', disabled = false, otherstyles }) {
  const baseStyle =
    'px-6 py-3 rounded-xl max-md:text-xs cursor-pointer font-semibold transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed cusror-pointer';

  const colorStyles =
    color === 'main'
      ? 'bg-secondary text-white'
      : 'bg-transparent text-black border border-black';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${colorStyles} ${otherstyles || ''}`}
    >
      {text}
    </button>
  );
}
