
import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: keyof typeof LucideIcons | string;
  size?: number | string;
  color?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color,
  fallback = "CircleAlert",
  ...props 
}) => {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] || LucideIcons[fallback];
  
  return <IconComponent size={size} color={color} {...props} />;
};

export default Icon;
