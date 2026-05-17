import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check, RotateCcw, Trophy, TrendingUp } from 'lucide-react';

// Live snapshot used for the dashboard:
// Points table data (as of 11 May 2026) from Cricbuzz IPL 2026 points table.
// Upcoming fixtures visible on the Cricbuzz IPL 2026 schedule page.

const BASE_TEAMS = [
  { code: 'RCB', name: 'Royal Challengers Bengaluru', played: 11, wins: 7, losses: 4, nr: 0, points: 14, nrr: 1.103, eliminated: false },
  { code: 'SRH', name: 'Sunrisers Hyderabad', played: 11, wins: 7, losses: 4, nr: 0, points: 14, nrr: 0.737, eliminated: false },
  { code: 'GT', name: 'Gujarat Titans', played: 11, wins: 7, losses: 4, nr: 0, points: 14, nrr: 0.228, eliminated: false },
  { code: 'PBKS', name: 'Punjab Kings', played: 10, wins: 6, losses: 3, nr: 1, points: 13, nrr: 0.571, eliminated: false },
  { code: 'CSK', name: 'Chennai Super Kings', played: 11, wins: 6, losses: 5, nr: 0, points: 12, nrr: 0.185, eliminated: false },
  { code: 'RR', name: 'Rajasthan Royals', played: 11, wins: 6, losses: 5, nr: 0, points: 12, nrr: 0.082, eliminated: false },
  { code: 'KKR', name: 'Kolkata Knight Riders', played: 10, wins: 4, losses: 5, nr: 1, points: 9, nrr: -0.169, eliminated: false },
  { code: 'DC', name: 'Delhi Capitals', played: 11, wins: 4, losses: 7, nr: 0, points: 8, nrr: -1.154, eliminated: false },
  { code: 'MI', name: 'Mumbai Indians', played: 11, wins: 3, losses: 8, nr: 0, points: 6, nrr: -0.585, eliminated: true },
  { code: 'LSG', name: 'Lucknow Super Giants', played: 11, wins: 3, losses: 8, nr: 0, points: 6, nrr: -0.907, eliminated: true },
];

const FIXTURES = [
  { id: 55, date: 'May 11', venue: 'Dharamsala', home: 'PBKS', away: 'DC' },
  { id: 56, date: 'May 12', venue: 'Ahmedabad', home: 'GT', away: 'SRH' },
  { id: 57, date: 'May 13', venue: 'Raipur', home: 'RCB', away: 'KKR' },
  { id: 58, date: 'May 14', venue: 'Dharamsala', home: 'PBKS', away: 'MI' },
  { id: 59, date: 'May 15', venue: 'Lucknow', home: 'LSG', away: 'CSK' },
];

function cloneTeams() {
  return BASE_TEAMS.map((t) => ({ ...t }));
}

function recalcTable(selections) {
  const table = cloneTeams();
  const byCode = Object.fromEntries(table.map((t) => [t.code, t]));

  for (const fixture of FIXTURES) {
    const winner = selections[fixture.id];
    if (!winner) continue;

    const home = byCode[fixture.home];
    const away = byCode[fixture.away];
    if (!home || !away) continue;

    home.played += 1;
    away.played += 1;
    home.losses += winner === fixture.away ? 1 : 0;
    away.losses += winner === fixture.home ? 1 : 0;
    home.wins += winner === fixture.home ? 1 : 0;
    away.wins += winner === fixture.away ? 1 : 0;
    home.points += winner === fixture.home ? 2 : 0;
    away.points += winner === fixture.away ? 2 : 0;
  }

  return table.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.nrr !== a.nrr) return b.nrr - a.nrr;
    return a.name.localeCompare(b.name);
  });
}

export default function IplPointsTableSimulator() {
  const [selections, setSelections] = useState({});

  const table = useMemo(() => recalcTable(selections), [selections]);

  const topFour = table.slice(0, 4).map((t) => t.code);

  const toggleWinner = (fixtureId, winnerCode) => {
    setSelections((prev) => {
      const next = { ...prev };
      if (next[fixtureId] === winnerCode) {
        delete next[fixtureId];
      } else {
        next[fixtureId] = winnerCode;
      }
      return next;
    });
  };

  const clearAll = () => setSelections({});

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300">
              <TrendingUp className="h-3.5 w-3.5" />
              IPL 2026 live points simulator
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Current standings + remaining matches
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-400 md:text-base">
              Pick a winner for each remaining fixture. The table updates instantly using a standard points rule: win = 2 points, no result = 1 point, loss = 0.
              NRR is kept unchanged in this simulator.
            </p>
          </div>
          <Button variant="secondary" onClick={clearAll} className="w-fit gap-2">
            <RotateCcw className="h-4 w-4" />
            Reset simulation
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900 md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Trophy className="h-5 w-5" />
                Top 4 snapshot
              </CardTitle>
              <CardDescription className="text-slate-400">
                Teams currently in the playoff zone after your selections.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {table.slice(0, 4).map((team, index) => (
                <div key={team.code} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm text-slate-400">#{index + 1}</div>
                      <div className="text-base font-semibold">{team.code}</div>
                      <div className="text-xs text-slate-500">{team.name}</div>
                    </div>
                    <Badge variant="outline" className="border-emerald-600/40 bg-emerald-500/10 text-emerald-300">
                      {team.points} pts
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Points table</CardTitle>
              <CardDescription className="text-slate-400">
                Sorted by points, then NRR. Rows marked with “E” are already eliminated in the live snapshot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-2xl border border-slate-800">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-slate-950 text-slate-400">
                    <tr>
                      <th className="px-4 py-3 font-medium">Pos</th>
                      <th className="px-4 py-3 font-medium">Team</th>
                      <th className="px-4 py-3 font-medium">P</th>
                      <th className="px-4 py-3 font-medium">W</th>
                      <th className="px-4 py-3 font-medium">L</th>
                      <th className="px-4 py-3 font-medium">NR</th>
                      <th className="px-4 py-3 font-medium">Pts</th>
                      <th className="px-4 py-3 font-medium">NRR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.map((team, index) => {
                      const isTopFour = topFour.includes(team.code);
                      return (
                        <tr
                          key={team.code}
                          className={`border-t border-slate-800 ${isTopFour ? 'bg-emerald-500/5' : 'bg-slate-900'} ${team.eliminated ? 'opacity-70' : ''}`}
                        >
                          <td className="px-4 py-3 font-semibold">{index + 1}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{team.code}</span>
                              <span className="text-slate-400">{team.name}</span>
                              {team.eliminated ? (
                                <Badge variant="secondary" className="ml-2 bg-slate-800 text-slate-300">
                                  E
                                </Badge>
                              ) : null}
                              {isTopFour ? (
                                <Badge className="ml-2 bg-emerald-600 text-white hover:bg-emerald-600">Playoff zone</Badge>
                              ) : null}
                            </div>
                          </td>
                          <td className="px-4 py-3">{team.played}</td>
                          <td className="px-4 py-3">{team.wins}</td>
                          <td className="px-4 py-3">{team.losses}</td>
                          <td className="px-4 py-3">{team.nr}</td>
                          <td className="px-4 py-3 font-semibold">{team.points}</td>
                          <td className="px-4 py-3">{team.nrr.toFixed(3)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-800 bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg">Remaining matches to simulate</CardTitle>
            <CardDescription className="text-slate-400">
              Click the winning team for each fixture. Click the same team again to undo that pick.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-2">
              {FIXTURES.map((fixture) => {
                const selected = selections[fixture.id];
                return (
                  <div key={fixture.id} className="rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-lg shadow-black/20">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Match {fixture.id}</div>
                        <div className="mt-1 text-lg font-semibold">
                          {fixture.home} vs {fixture.away}
                        </div>
                        <div className="text-sm text-slate-400">
                          {fixture.date} • {fixture.venue}
                        </div>
                      </div>
                      {selected ? (
                        <Badge className="bg-sky-600 text-white hover:bg-sky-600">
                          Selected: {selected}
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="border-slate-700 text-slate-300">
                          No pick yet
                        </Badge>
                      )}
                    </div>

                    <Separator className="my-4 bg-slate-800" />

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button
                        variant={selected === fixture.home ? 'default' : 'secondary'}
                        onClick={() => toggleWinner(fixture.id, fixture.home)}
                        className="justify-start gap-2"
                      >
                        {selected === fixture.home ? <Check className="h-4 w-4" /> : null}
                        {fixture.home} wins
                      </Button>
                      <Button
                        variant={selected === fixture.away ? 'default' : 'secondary'}
                        onClick={() => toggleWinner(fixture.id, fixture.away)}
                        className="justify-start gap-2"
                      >
                        {selected === fixture.away ? <Check className="h-4 w-4" /> : null}
                        {fixture.away} wins
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
