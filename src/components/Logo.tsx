
import React from 'react';
import { Link } from 'react-router-dom';
import iQraalogo from "../assets/logo.png"
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: "h-12",
    md: "h-16",
    lg: "h-20"
  };

  return (
    <Link to="/" className="flex items-center">
      <img 
        src={iQraalogo} 
        alt="" 
        className={`${sizeClasses[size]} w-auto`} 
      />
    </Link>
  );
};

export default Logo;