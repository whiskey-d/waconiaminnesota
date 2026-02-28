import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  children: React.ReactNode;
}

export default function CTAButton({
  href,
  variant = "primary",
  size = "md",
  external = false,
  children,
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md";

  const variants = {
    primary: "bg-lake text-white hover:bg-lake-700 active:bg-lake-800",
    secondary: "bg-amber text-white hover:bg-amber-600 active:bg-amber-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const className = `${baseStyles} ${variants[variant]} ${sizes[size]}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
