import { motion } from 'framer-motion';

interface MobileMenuButtonProps {
  showDetails: boolean;
  setShowDetails: (show: boolean) => void;
}

export const MobileMenuButton = ({ showDetails, setShowDetails }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={() => setShowDetails(!showDetails)}
      className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg lg:hidden"
    >
      <span className="sr-only">Toggle Details</span>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {showDetails ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        )}
      </svg>
    </button>
  );
}; 