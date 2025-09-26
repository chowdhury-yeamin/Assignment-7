export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto my-6 px-4">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold">In-Progress</h2>
        <p className="text-4xl font-bold">{inProgressCount}</p>
      </div>
      <div className="bg-gradient-to-r from-[#54cf68] to-[#00827a] text-white p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold">Resolved</h2>
        <p className="text-4xl font-bold">{resolvedCount}</p>
      </div>
    </div>
  );
}
