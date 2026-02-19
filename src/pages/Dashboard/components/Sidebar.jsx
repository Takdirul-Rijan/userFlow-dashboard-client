const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white p-5 min-h-screen">
      <h2 className="mb-5 text-lg font-semibold">Dashboard</h2>

      <ul className="list-none p-0">
        <li className="mb-4 cursor-pointer">Overview</li>
        <li className="mb-4 cursor-pointer">Projects</li>
        <li className="mb-4 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
