import { bets, challenge } from "@/lib/challenge-data";

export default async function PublicChallengePage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto max-w-3xl px-6 py-12">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-400">
          @fundamental.lemur2378
        </p>

        <h1 className="text-5xl font-black">{challenge.title}</h1>

        <p className="mt-4 text-lg text-zinc-300">
          Started with ${challenge.startingAmount}. Current bankroll:{" "}
          <strong className="text-white">${challenge.currentBankroll}</strong>.
          Goal: ${challenge.goal.toLocaleString()}.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">Rules</h2>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>One $10 tip per week max.</li>
            <li>No chasing losses.</li>
            <li>No school, bill, or family money.</li>
            <li>Every bet gets logged.</li>
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">Public bet history</h2>

          <div className="mt-4 space-y-4">
            {bets.map((bet) => (
              <div key={bet.id} className="rounded-xl bg-zinc-950 p-4">
                <h3 className="font-bold">{bet.marketTitle}</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {bet.side} · ${bet.stake} → ${bet.payout} · {bet.result}
                </p>
                <p className="mt-3 text-sm text-zinc-300">{bet.reasoning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}