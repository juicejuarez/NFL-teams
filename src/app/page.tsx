"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TeamProps {
  [division: string]: string[];
}

export default function Home() {
  const [afcOpen, setAfcOpen] = useState<boolean>(false);
  const [nfcOpen, setNfcOpen] = useState<boolean>(false);

  const afcTeams: TeamProps = {
    "North": [
      "Baltimore Ravens",
      "Cincinnati Bengals",
      "Cleveland Browns",
      "Pittsburgh Steelers"
    ],
    "South": [
      "Houston Texans",
      "Indianapolis Colts",
      "Jacksonville Jaguars",
      "Tennessee Titans"
    ],
    "East": [
      "Buffalo Bills",
      "Miami Dolphins",
      "New England Patriots",
      "New York Jets"
    ],
    "West": [
      "Denver Broncos",
      "Kansas City Chiefs",
      "Las Vegas Raiders",
      "Los Angeles Chargers"
    ]
  };

  const nfcTeams: TeamProps = {
    "North": [
      "Chicago Bears",
      "Detroit Lions",
      "Green Bay Packers",
      "Minnesota Vikings"
    ],
    "South": [
      "Atlanta Falcons",
      "Carolina Panthers",
      "New Orleans Saints",
      "Tampa Bay Buccaneers"
    ],
    "East": [
      "Dallas Cowboys",
      "New York Giants",
      "Philadelphia Eagles",
      "Washington Commanders"
    ],
    "West": [
      "Arizona Cardinals",
      "Los Angeles Rams",
      "San Francisco 49ers",
      "Seattle Seahawks"
    ]
  };

  const renderTeamsList = (conference: string, divisions: TeamProps) => {
    return Object.entries(divisions).map(([division, teams]) => (
      <div key={division} className="mb-4">
        <h3 className="text-lg font-semibold text-gray-300 mb-2">{conference} {division}</h3>
        <div className="pl-4">
          {teams.map((team) => (
            <a
              key={team}
              href={`/teams/${team.replace(/\s+/g, "-").toLowerCase()}`}
              className="block text-blue-400 hover:text-blue-300 py-1 transition-colors"
            >
              {team}
            </a>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8">NFL Teams</h1>
      
      <div className="w-full max-w-2xl space-y-4">
        {/* AFC Dropdown */}
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setAfcOpen(!afcOpen)}
            className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 flex justify-between items-center"
          >
            <span className="text-xl font-semibold">American Football Conference (AFC)</span>
            <ChevronDown
              className={`transform transition-transform ${afcOpen ? 'rotate-180' : ''}`}
              size={24}
            />
          </button>
          {afcOpen && (
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              {renderTeamsList('AFC', afcTeams)}
            </div>
          )}
        </div>

        {/* NFC Dropdown */}
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setNfcOpen(!nfcOpen)}
            className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 flex justify-between items-center"
          >
            <span className="text-xl font-semibold">National Football Conference (NFC)</span>
            <ChevronDown
              className={`transform transition-transform ${nfcOpen ? 'rotate-180' : ''}`}
              size={24}
            />
          </button>
          {nfcOpen && (
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              {renderTeamsList('NFC', nfcTeams)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
