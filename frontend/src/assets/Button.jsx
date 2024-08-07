const sizes = {
  md: 'px-4 py-2 rounded-md text-base',
  lg: 'px-5 py-3 rounded-lg text-lg',
};

const colors = {
  indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white',
  red: 'bg-red-500 hover:bg-red-600 text-white',
  blue: 'bg-blue-500 hover:bg-blue-600 text-white', // Added blue color for Save button
};

export default function Button({ color, size, children, onClick, type }) {
  let colorClasses = colors[color];
  let sizeClasses = sizes[size];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-bold ${sizeClasses} ${colorClasses}`}
    >
      {children}
    </button>
  );
}
