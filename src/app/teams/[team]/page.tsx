import React from "react";
import Image from "next/image";

interface Params {
  team: string;
}

async function getTeamSlug(params: Params) {
  const resolvedParams = await Promise.resolve(params);
  return resolvedParams.team;
}

async function getTeamDetails(teamSlug: string) {
  const teamAbbreviations: { [key: string]: string } = {
    "arizona-cardinals": "ARI",
    "atlanta-falcons": "ATL",
    "baltimore-ravens": "BAL",
    "buffalo-bills": "BUF",
    "carolina-panthers": "CAR",
    "chicago-bears": "CHI",
    "cincinnati-bengals": "CIN",
    "cleveland-browns": "CLE",
    "dallas-cowboys": "DAL",
    "denver-broncos": "DEN",
    "detroit-lions": "DET",
    "green-bay-packers": "GB",
    "houston-texans": "HOU",
    "indianapolis-colts": "IND",
    "jacksonville-jaguars": "JAX",
    "kansas-city-chiefs": "KC",
    "las-vegas-raiders": "LV",
    "los-angeles-chargers": "LAC",
    "los-angeles-rams": "LAR",
    "miami-dolphins": "MIA",
    "minnesota-vikings": "MIN",
    "new-england-patriots": "NE",
    "new-orleans-saints": "NO",
    "new-york-giants": "NYG",
    "new-york-jets": "NYJ",
    "philadelphia-eagles": "PHI",
    "pittsburgh-steelers": "PIT",
    "san-francisco-49ers": "SF",
    "seattle-seahawks": "SEA",
    "tampa-bay-buccaneers": "TB",
    "tennessee-titans": "TEN",
    "washington-commanders": "WAS",
  };

  const teamMessages: { [key: string]: string } = {
    "arizona-cardinals": "Murray will break down year after year",
    "atlanta-falcons": "Penix is better than Cousins",
    "baltimore-ravens": "Run Henry run",
    "buffalo-bills": "Josh will always be the runner-up",
    "carolina-panthers": "The trade for Young was the worst trade in NFL history",
    "chicago-bears": "Caleb is not our savior",
    "cincinnati-bengals": "Burrow and Chase are the best duo in the NFL right now",
    "cleveland-browns": "Brown is the color of victory!",
    "dallas-cowboys": "Jerry will run this team into the ground",
    "denver-broncos": "Nix is better than everyone thought",
    "detroit-lions": "The best offense in the NFL",
    "green-bay-packers": "Have not figured out who their WR1 is yet",
    "houston-texans": "Dell has been placed on permanent IR",
    "indianapolis-colts": "Taylor has 2 more years, and our shot leaves with him",
    "jacksonville-jaguars": "Etienne is our primary backup RB",
    "kansas-city-chiefs": "The Kansas City Chiefs are the 2023 Super Bowl champions! Repeat!!!!!!",
    "las-vegas-raiders": "You're fired",
    "los-angeles-chargers": "The best team to always disappoint",
    "los-angeles-rams": "Best team in LA",
    "miami-dolphins": "Hawk Tua your way to the playoffs",
    "minnesota-vikings": "Is it Darnold or the WRs?",
    "new-england-patriots": "We miss TOM",
    "new-orleans-saints": "Carr is Winston all over again",
    "new-york-giants": "I should have listened to my son",
    "new-york-jets": "Rodgers scammed us",
    "philadelphia-eagles": "Run Barkley RUN",
    "pittsburgh-steelers": "TOM the average king",
    "san-francisco-49ers": "Garoppolo 2.0",
    "seattle-seahawks": "JSN is going to be a superstar",
    "tampa-bay-buccaneers": "Baker, get up and play",
    "tennessee-titans": "Where are A.J. and Henry?",
    "washington-commanders": "Jayden f***ing Daniels",
  };

  const teamColors: { [key: string]: { bg: string; text: string } } = {
    "arizona-cardinals": { bg: "bg-red-700", text: "text-white" },
    "atlanta-falcons": { bg: "bg-red-600", text: "text-black" },
    "baltimore-ravens": {bg: "bg-purple-800", text: "text-black" },
    "buffalo-bills": { bg: "bg-blue-700", text: "text-white" },
    "carolina-panthers": { bg: "bg-blue-500", text: "text-black" },
    "chicago-bears": { bg: "bg-orange-600", text: "text-black" },
    "cincinnati-bengals": { bg: "bg-orange-700", text: "text-black" },
    "cleveland-browns": {bg: "bg-orange-900", text: "text-orange-300" },
    "dallas-cowboys": { bg: "bg-gray-900", text: "text-white" },
    "denver-broncos": { bg: "bg-orange-700", text: "text-blue-900" },
    "detroit-lions": { bg: "bg-blue-600", text: "text-white" },
    "green-bay-packers": { bg: "bg-green-700", text: "text-yellow-300" },
    "houston-texans": { bg: "bg-red-800", text: "text-white" },
    "indianapolis-colts": { bg: "bg-blue-800", text: "text-white" },
    "jacksonville-jaguars": { bg: "bg-teal-700", text: "text-gold-300" },
    "kansas-city-chiefs": { bg: "bg-red-600", text: "text-yellow-400"},
    "las-vegas-raiders": { bg: "bg-black", text: "text-white" },
    "los-angeles-chargers": { bg: "bg-blue-600", text: "text-yellow-300" },
    "los-angeles-rams": { bg: "bg-blue-700", text: "text-gold-300" },
    "miami-dolphins": { bg: "bg-teal-600", text: "text-orange-300" },
    "minnesota-vikings": { bg: "bg-purple-700", text: "text-yellow-300" },
    "new-england-patriots": { bg: "bg-blue-800", text: "text-red-400" },
    "new-orleans-saints": { bg: "bg-black", text: "text-gold-300" },
    "new-york-giants": { bg: "bg-blue-800", text: "text-white" },
    "new-york-jets": { bg: "bg-green-700", text: "text-white" },
    "philadelphia-eagles": { bg: "bg-green-800", text: "text-white" },
    "pittsburgh-steelers": { bg: "bg-black", text: "text-yellow-400" },
    "san-francisco-49ers": { bg: "bg-red-700", text: "text-gold-300" },
    "seattle-seahawks": { bg: "bg-blue-800", text: "text-green-400" },
    "tampa-bay-buccaneers": { bg: "bg-red-700", text: "text-white" },
    "tennessee-titans": { bg: "bg-blue-700", text: "text-red-400" },
    "washington-commanders": { bg: "bg-red-800", text: "text-yellow-300" },
  };

  return {
    teamName: teamSlug.replace(/-/g, " "),
    message: teamMessages[teamSlug] || "No information available for this team.",
    teamAbbrev: teamAbbreviations[teamSlug],
    colors: teamColors[teamSlug] || { bg: "bg-gray-100", text: "text-black" }
  };
}

export async function generateMetadata({ params }: { params: Params }) {
  const teamSlug = await getTeamSlug(params);
  const { teamName } = await getTeamDetails(teamSlug);
  
  return {
    title: `${teamName} - NFL Team`,
    description: `Find out more about the ${teamName} team, including their logo and message.`,
  };
}

export default async function TeamPage({ params }: { params: Params }) {
  const teamSlug = await Promise.resolve(params.team);
  
  if (!teamSlug) {
    return <h1 className="text-3xl font-bold text-center mt-20">Error: Team not found</h1>;
  }

  const { teamName, message, teamAbbrev, colors } = await getTeamDetails(teamSlug);
  
  const logoUrl = teamAbbrev 
    ? `https://static.www.nfl.com/t_q-best/league/api/clubs/logos/${teamAbbrev}.png`
    : "/default-logo.png";

  return (
    <div className={`min-h-screen p-8 ${colors.bg} flex flex-col items-center`}>
      <div className="flex items-center mb-6">
        <Image 
          src={logoUrl} 
          alt={`${teamName} logo`} 
          width={64} 
          height={64} 
          className="mr-4" 
        />
        <h1 className={`text-5xl font-bold ${colors.text}`}>{teamName}</h1>
      </div>
      <p className={`text-xl text-center max-w-2xl ${colors.text}`}>{message}</p>
    </div>
  );
}