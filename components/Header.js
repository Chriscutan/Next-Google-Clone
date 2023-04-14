import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://imgs.search.brave.com/JtCIN6xrGFuyUS3kQpvLRFeoSTr1iO_Fussy6UKIXf0/rs:fit:474:160:1/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy9s/YXJnZS9wdXJlcG5n/LmNvbS1nb29nbGUt/bG9nby0yMDE1YnJh/bmRsb2dvYnJhbmQt/bG9nb2ljb25zc3lt/Ym9sc2xvZ29zZ29v/Z2xlLTY4MTUyMjkz/NzIzMzNtcXJyLnBu/Zw"
          alt="google"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-1 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-1 mr-3 text-blue-500 hidden sm:inline-flex border-l-2 pl-4 border-gray-300" />

          <SearchIcon className="h-1 text-blue-500 hidden sm:inline-flex" />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          url="https://avatars.githubusercontent.com/u/97525332?v=4"
          className="ml-auto"
        />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
