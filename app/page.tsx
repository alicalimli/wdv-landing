import Image from "next/image";
import SwipePreviews from "./swipe-previews";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      {" "}
      <main className="min-h-screen overflow-y-hidden mb-16 relative overflow-x-hidden px-vw-28 mx-auto flex flex-col p-8">
        <div className="flex-1 flex flex-col gap-20 items-center mt-32">
          <div className="text-center flex flex-col gap-2 items-center max-w-3xl">
            <Image
              src="/wdv-logo.png"
              width={250}
              height={250}
              alt="Website Logo"
            />

            <h1 className="text-5xl font-bold">
              <span className="text-[#2563EB]">Visuals </span>to Level Up Your
              Front-end Skills
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
                You will get early access and get a special coupon.
              </p>
            </div>
          </div>

          <SwipePreviews />
        </div>
      </main>
      <Footer />
    </>
  );
}
