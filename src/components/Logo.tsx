import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export default function Logo({ className = "h-8 w-8", variant = 'full' }: LogoProps) {
  const imagePath = variant === 'full' ? '/images/logo.png' : '/images/logo-icon.png';
  
  return (
    <img 
      src={imagePath}
      alt="HU Fusion Logo"
      className={className}
    />
  );
}