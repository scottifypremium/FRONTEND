interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'stats' | 'book';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseStyles = 'rounded-lg bg-white shadow-sm';
  const variantStyles = {
    default: 'p-6',
    stats: 'p-6 flex items-center space-x-4',
    book: 'p-4 hover:shadow-md transition-shadow duration-200',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
} 