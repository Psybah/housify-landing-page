import React from 'react';
import { User, AlertTriangle, Hourglass } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Heritage O.",
    username: "@Tinomagmi",
    body: "Please if you have anyone moving out of a selfcon in Agege, Ogba, Bariga, Somolu, Oworo, please lmk 🙏. I'm suffering in the hands of these agents. Budget is 500k (can go slightly higher)",
    img: "https://pbs.twimg.com/profile_images/1799865208858423296/UihdAudS_400x400.jpg",
  },
  {
    name: "chababy💙",
    username: "@chababy81",
    body: "This is how bad agent in Nigeria are, they will collect heavy amount of money and still not give you the house you pay for. Imagine N1,650,000, I pray that lady get justice",
    img: "https://pbs.twimg.com/profile_images/1835583740690440192/DcDwlRoj_400x400.jpg",
  },
  {
    name: "Alex Oluwatobi",
    username: "@alexlobaloba",
    body: "Don't trust any Lagos agent! Lagos agents will package an abnormal apartment, add their ridiculous agency + commission fee which most of the time is equivalent to the normal rent, then push it down the throat of desperate innocent souls.",
    img: "https://pbs.twimg.com/profile_images/1890527755978117120/F7l8DkpX_400x400.jpg",
  },
  {
    name: "Gbenzome boy",
    username: "@Yomieee1",
    body: "House hunting in Nigeria is ghetto man. An agent sent me a place, said it was 1.4m, asked for inspection fee 10k. Got there and this place was shiiit! Eventually, he mistakenly confessed that the rent was 900k. A whopping 500k difference.",
    img: "https://pbs.twimg.com/profile_images/1810783511063732224/yez5nvvy_400x400.jpg",
  },
  {
    name: "HRH Kristy😌",
    username: "@Kwistie_Royal",
    body: "Those supposed agents are the number 1 problem we have in Abuja. Agents will tell landlord that his house should go for 8m as against 800k the higher the rent the more commission dey get. Evil people",
    img: "https://pbs.twimg.com/profile_images/1620755089265758209/h7M18tcJ_400x400.jpg",
  },
  {
    name: "Ez sama",
    username: "@unsliced_dodo",
    body: "Almost 1 month, 50k spent on agent fees and no affordable houses found still, everything na from 1.6 or the street na war zone, ordinary mini flat o",
    img: "https://pbs.twimg.com/profile_images/1821306558598238208/kNAscjg6_400x400.jpg",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[350px] cursor-pointer overflow-hidden rounded-xl border p-4 mx-3",
        "border-gray-950/[.1] bg-white hover:bg-gray-50",
        "transition-colors duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full w-10 h-10" alt="" src={img} />
        <div className="flex flex-col items-start">
          <figcaption className="text-sm font-medium text-gray-900">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-gray-600 line-clamp-4 text-left">{body}</blockquote>
    </figure>
  );
};

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-orange/10 text-housify-orange mb-4">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Renting in Nigeria is <span className="gradient-text">broken</span>
          </h2>
          <div className="relative w-full overflow-hidden mt-8">
            <Marquee 
              pauseOnHover 
              className="[--duration:20s] py-4"
            >
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem Card 1 */}
          <div className="glass-card p-8 flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-housify-blue/10 flex items-center justify-center mb-6">
              <User className="text-housify-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ridiculous Agent Pricing</h3>
            <p className="text-gray-600 mb-4">
              The reliance on agents results in exorbitant fees and inflated costs, making the renting process unnecessarily expensive.
            </p>
            <div className="mt-auto pt-4">
              <div className="text-2xl font-bold gradient-text">90%</div>
              <div className="text-sm text-gray-500">Agent Reliance</div>
            </div>
          </div>

          {/* Problem Card 2 */}
          <div className="glass-card p-8 flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-housify-orange/10 flex items-center justify-center mb-6">
              <AlertTriangle className="text-housify-orange h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Scam & Unverified Landlords</h3>
            <p className="text-gray-600 mb-4">
            House seekers frequently fall victim to fake landlords and fraudulent listings, leading to cases of deposit fraud, misleading property details, and non-existent apartments.
            </p>
            <div className="mt-auto pt-4">
              <div className="text-2xl font-bold gradient-text"> ₦5B+</div>
              <div className="text-sm text-gray-500">Lost to Rental Fraud Annually</div>
            </div>
          </div>

          {/* Problem Card 3 */}
          <div className="glass-card p-8 flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-housify-blue/10 flex items-center justify-center mb-6">
              <Hourglass className="text-housify-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Time-Consuming Search Process</h3>
            <p className="text-gray-600 mb-4">
            Finding a house in Nigeria is stressful, inefficient, and unstructured, forcing renters to physically visit multiple locations before finding a suitable home.
            </p>
            <div className="mt-auto pt-4">
              <div className="text-2xl font-bold gradient-text">4-6 Weeks</div>
              <div className="text-sm text-gray-500">Average House-Hunting Time</div>
            </div>
          </div>
        </div>

        {/* The Situation */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-sm text-gray-500 mb-2">THE SITUATION</div>
            <p className="text-xl font-medium">
              "House hunting in Nigeria is stressful—agents charge too much, scams are everywhere, and finding a legit home takes forever. We’re fixing that."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
