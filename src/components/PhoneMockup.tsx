import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export default function PhoneMockup() {
  return (
    <div className="relative">
      <Iphone15Pro
        className="w-[200px] h-[500px] md:w-[240px] md:h-[580px]"
        src="mockup.jpeg"
      />
    </div>
  );
}
