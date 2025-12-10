export default function Table({ children }) {
    return (
      <div className="w-full overflow-x-auto ">
        <table className="min-w-full text-sm text-left text-gray-800 bg-white">
          {children}
        </table>
      </div>
    );
  }