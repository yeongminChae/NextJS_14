export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-300 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-slate-600">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg md:flex-row dark:bg-gray-700">
        <input
          type="text"
          placeholder="Search here..."
          className="h-10 w-full rounded-full bg-gray-200 pl-5 outline-none ring ring-transparent transition-shadow placeholder:drop-shadow focus:shadow-md focus:ring-orange-500 focus:ring-offset-2"
        />
        <button className="rounded-full bg-gradient-to-tr from-cyan-500 via-pink-400 to-purple-500 py-2 font-medium text-white outline-none transition-transform focus:scale-90 active:scale-90 md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
