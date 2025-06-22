import Image from "next/image";
import SignupForm from "./_components/SignupForm";
export default function RegisterPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="grid sm:grid-cols-2 grid-cols-1 h-full sm:pt-5 pt-24 items-center md:gap-20 gap-10 px-8">
        <SignupForm />
        <div className="grid grid-cols-2 gap-5 p-5 max-h-[600px] max-w-xl" data-aos="fade-left">
          <div className="flex flex-col gap-5">
            <img
              src="/img3.avif"
              alt="1"
              className="h-[140px] w-full object-cover rounded-[30px]"
            />
            <img
              src="/img2.avif"
              alt="2"
              className="h-[140px] w-full object-cover rounded-[30px]"
            />
          </div>

          <div className="relative h-[300px] w-full">
            <Image
              src="/mount.jpg"
              alt="3"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>

          <div className="relative h-[300px] w-full">
            <Image
              src="/mount2.avif"
              alt="4"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>

          <div className="flex flex-col gap-5">
            <img
              src="/rara.avif"
              alt="5"
              className="h-[140px] w-full object-cover rounded-[30px]"
            />
            <img
              src="/img2.avif"
              alt="6"
              className="h-[140px] w-full object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
