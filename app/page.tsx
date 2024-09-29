import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="flex gap-x-4 items-center flex-row mb-10">
        <Image
          src={"/image.jpg"}
          alt="profile pic"
          width={100}
          height={100}
          className="rounded-full border-[2px] border-yellow-500 -ml-2 hover:grayscale transition-all duration-300"
        />
        <div>
          <p className="text-xl font-semibold">John Doe</p>
          <p className="text-lg text-gray-400">Student at SLIIT</p>
        </div>
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome! 👋
      </h1>
      <p className="mb-4">
        I am a passionate JavaScript developer and full-time student at SLIIT.
        With a year of self-taught coding experience, I enjoy building web
        applications and writing about web development as a part-time blogger.
        I'm a fan of open-source contributions and JAMstack technologies, always
        seeking new opportunities to collaborate and grow as a developer.
      </p>
      <div className="my-8">
        <p className="text-gray-400 text-lg mb-2">From my blog</p>
        <BlogPosts />
      </div>
    </section>
  );
}
