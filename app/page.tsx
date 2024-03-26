export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-300 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 dark:bg-slate-600">
      <div className="flex w-full max-w-screen-sm flex-col gap-4 rounded-3xl bg-white p-5 shadow-lg">
        <div className="group flex flex-col">
          <input
            type="email"
            className="w-full bg-gray-100"
            placeholder="Write your email peer"
          />
          <span className="hidden group-focus-within:block">
            Make sure it is a valid email.
          </span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
