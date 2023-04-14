import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/97525332?v=4"
      alt="image"
      height={40}
      width={40}
      className={`rounded-full ${className}`}
    />
  );
}

export default Avatar;
