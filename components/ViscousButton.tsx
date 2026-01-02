import React, { useState } from 'react';

interface ViscousButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ViscousButton: React.FC<ViscousButtonProps> = ({ children, className = '', ...props }) => {
  const [isPressed, setIsPressed] = useState(false);

  // Style overrides for the "Hyperdrive" click effect
  const streakStyle: React.CSSProperties = isPressed ? {
      width: '300px',
      filter: 'brightness(2)',
      opacity: 1
  } : {};

  return (
    <div 
        className="btn-wrapper group"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
    >
        <div className="streak streak-1" style={streakStyle}></div>
        <div className="streak streak-2" style={streakStyle}></div>
        <div className="streak streak-3" style={streakStyle}></div>
        <button className={`viscous-btn ${className}`} {...props}>
            {children}
        </button>
    </div>
  );
};

export default ViscousButton;