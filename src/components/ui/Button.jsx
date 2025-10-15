import React from 'react';
import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'default-btn';
  
  const variantClasses = {
    primary: '',
    outlined: 'btn-outlined',
    secondary: 'btn-secondary'
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  const content = (
    <>
      {iconPosition === 'left' && icon}
      <span>{children}</span>
      {iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;