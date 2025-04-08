import Iphone15Pro from "@/components/magicui/iphone-15-pro";

interface PhoneMockupProps {
  src?: string;
}

export default function PhoneMockup({ src = "mockup.jpeg" }: PhoneMockupProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <Iphone15Pro
          className="w-[220px] h-[500px] md:w-[240px] md:h-[580px]"
          src={src}
        />
        
        {/* Accent elements */}
        <div className="absolute top-1/3 -left-8 w-6 h-6 rounded-full bg-housify-orange/20 animate-pulse-subtle" />
        <div className="absolute bottom-1/4 -right-4 w-4 h-4 rounded-full bg-housify-blue/30 animate-pulse-subtle" />
      </div>
    </div>
  );
}
