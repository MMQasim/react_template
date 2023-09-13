import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center all bg-gradient-to-r from-cyan-500 to-indigo-500 w-screen h-screen">
      <div className=" flex flex-col items-center gap-2 p-24 pt-10 rounded  bg-white">
        <div className=" mt-4 mb-4 text-lg font-bold hover:font-thin">
          Login
        </div>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Username:
          </span>
          <input
            type="text"
            className="peer w-full border-b-2 rounded mt-2 placeholder:italic placeholder:text-slate-400"
            placeholder="Type your Username"
          />
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid User.
          </p>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Password:
          </span>
          <input
            type="text"
            className="peer w-full border-b-2 rounded mt-2 placeholder:italic placeholder:text-slate-400"
            placeholder="Type your Password"
          />
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid Password.
          </p>
        </label>
        <button className="rounded-full text-white font-semibold bg-gradient-to-r from-[#60d7de] to-[#a48be7] to-[#e23ef4] w-full p-2 m-1 ">
          LOGIN
        </button>
        <button className="rounded-full text-white font-semibold bg-gradient-to-r from-[#60d7de] to-[#a48be7] to-[#e23ef4] w-full p-2 m-1 ">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default App;
