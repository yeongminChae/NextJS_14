export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-300 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-slate-600">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg md:flex-row dark:bg-gray-700">
        <input
          type="email"
          placeholder="Email address"
          required
          className="peer h-10 w-full rounded-full bg-gray-200 pl-5 outline-none ring ring-transparent transition-shadow placeholder:drop-shadow focus:shadow-md focus:ring-green-500 focus:ring-offset-2 invalid:focus:ring-red-500"
        />
        <span className="hidden font-medium text-red-500 peer-invalid:block">
          Email is Required.
        </span>
        <button className="rounded-full bg-black py-2 font-medium text-white outline-none transition-transform active:scale-90 peer-required:bg-green-500 md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
