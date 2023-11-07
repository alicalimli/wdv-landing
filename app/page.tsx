import Image from "next/image";
import SwipePreviews from "./swipe-previews";

export default function Home() {
  return (
    <main className="min-h-screen overflow-y-hidden mb-16 relative overflow-x-hidden px-vw-28 mx-auto flex flex-col p-8">
      <nav className="flex items-center">
        <Image
          src="/wdv-logo.png"
          width={200}
          height={200}
          alt="Website Logo"
        />

        <button className="rounded-full p-3 px-8 bg-[#2563EB] hover:bg-[#2563EB]/80 duration-300 ml-auto">
          Join Waitlist
        </button>
      </nav>

      <div className="flex-1 flex flex-col gap-20 items-center mt-24">
        <div className="text-center flex flex-col gap-2 items-center max-w-3xl">
          <h1 className="text-5xl font-semibold">
            Visuals to level up your frontend skills
          </h1>
          <p className="opacity-80 max-w-xl text-lg">
            Browse 50+ visuals that would take your web dev skills to the next
            level
          </p>

          <div className="flex flex-col gap-2 w-full max-w-2xl mt-4">
            <iframe
              src="https://embeds.beehiiv.com/990fd037-3107-4dfb-af18-beb09d4805c3?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              // @ts-ignore
              frameborder="0"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
            ></iframe>

            <p className="opacity-50 text-sm text-start">
              You will get early access and get a special deal once its ready.
            </p>
          </div>
        </div>

        <SwipePreviews />
      </div>
    </main>
  );
}
