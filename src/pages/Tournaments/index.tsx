import React from "react";

interface Tournament {
  name: string;
  status: string;
  prize_pool: string;
  dates: string;
  country: string;
  link: string;
  logo: string;
}

const tournaments: Tournament[] = [
  {
    name: "Challengers League 2025 Southeast Asia: Split 1",
    status: "Ongoing",
    prize_pool: "$50,000",
    dates: "Jan 6—Feb 16",
    country: "un",
    link: "https://www.vlr.gg/event/2305/challengers-league-2025-southeast-asia-split-1",
    logo: "https://owcdn.net/img/6009f963577f4.png",
  },
  {
    name: "China Evolution Series: Act 1",
    status: "Upcoming",
    prize_pool: "$0",
    dates: "Feb 8—16",
    country: "cn",
    link: "https://www.vlr.gg/event/2339/china-evolution-series-act-1",
    logo: "https://owcdn.net/img/65dd97cea9a25.png",
  },
  {
    name: "Champions Tour 2025: Masters Bangkok",
    status: "Upcoming",
    prize_pool: "$500,000",
    dates: "Feb 19—Mar 2",
    country: "th",
    link: "https://www.vlr.gg/event/2281/champions-tour-2025-masters-bangkok",
    logo: "https://owcdn.net/img/603bfd7bf3f54.png",
  },
  {
    name: "BREAKPOINT 2025: Split 2",
    status: "Upcoming",
    prize_pool: "$4,569",
    dates: "Mar 6—16",
    country: "un",
    link: "https://www.vlr.gg/event/2332/breakpoint-2025-split-2",
    logo: "https://owcdn.net/img/676a875158d0d.png",
  },
  {
    name: "MVT 3: Finals",
    status: "Completed",
    prize_pool: "$2,913",
    dates: "Jan 20—31",
    country: "mn",
    link: "https://www.vlr.gg/event/2329/mvt-3-finals",
    logo: "https://owcdn.net/img/66dac0b39d43c.png",
  },
  {
    name: "Champions Tour 2025: China Kickoff",
    status: "Completed",
    prize_pool: "TBD",
    dates: "Jan 10—25",
    country: "cn",
    link: "https://www.vlr.gg/event/2275/champions-tour-2025-china-kickoff",
    logo: "https://owcdn.net/img/65dd97cea9a25.png",
  },
];

export const Tournaments: React.FC = () => {
  return (
    <div className="min-h-screen w-full  ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold  text-white mb-10">Tournaments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-[#4deeea]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={tournament.logo || "/placeholder.svg"}
                    alt={tournament.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      tournament.status === "Ongoing"
                        ? "bg-green-500"
                        : tournament.status === "Upcoming"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    } text-white`}
                  >
                    {tournament.status}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{tournament.name}</h2>
                <p className="text-gray-300 mb-2">Prize Pool: {tournament.prize_pool}</p>
                <p className="text-gray-300 mb-2">Dates: {tournament.dates}</p>
                <p className="text-gray-300 mb-4">Country: {tournament.country.toUpperCase()}</p>
                <button
                  className="w-full bg-white/40 hover:bg-white/20  text-white font-semibold py-2 px-4 rounded-full duration-300"
                  onClick={() => window.open(tournament.link, "_blank")}
                >
                  View Tournament
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
