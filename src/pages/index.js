import Head from "next/head";
import Avatar from "../../components/Avatar";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link ref="icon" href="/public/google.png" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between items-center text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10" />

          <Avatar url="https://avatars.githubusercontent.com/u/97525332?v=4" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://imgs.search.brave.com/JtCIN6xrGFuyUS3kQpvLRFeoSTr1iO_Fussy6UKIXf0/rs:fit:474:160:1/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy9s/YXJnZS9wdXJlcG5n/LmNvbS1nb29nbGUt/bG9nby0yMDE1YnJh/bmRsb2dvYnJhbmQt/bG9nb2ljb25zc3lt/Ym9sc2xvZ29zZ29v/Z2xlLTY4MTUyMjkz/NzIzMzNtcXJyLnBu/Zw"
          alt="google"
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </main>
  );
}
