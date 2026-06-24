import Link from "next/link";
import { bets, challenge } from "@/lib/challenge-data";

export default function Home() {
  const progress = Math.min(
    Math.round((challenge.currentBankroll / challenge.goal) * 100),
    100
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-emerald-400">
            One tip in. No chasing.
          </p>
          <h1 className="text-5xl font-black tracking-tight">
            {challenge.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Turning one $10 tip into a $5,000 bankroll through prediction
            markets. Public receipts, capped risk, and no extra deposits.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Stat label="Current bankroll" value={`$${challenge.currentBankroll}`} />
          <Stat label="Goal" value={`$${challenge.goal.toLocaleString()}`} />
          <Stat label="Deposited" value={`$${challenge.totalDeposited}`} />
          <Stat label="Yearly cap" value={`$${challenge.yearlyBudget}`} />
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-3 flex justify-between text-sm">
            <span>Progress to $5k</span>
            <span>{progress}%</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-emerald-400"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Milestones</h2>
            <div className="space-y-3">
              {[10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120].map(
                (amount) => (
                  <div
                    key={amount}
                    className="flex items-center justify-between rounded-xl bg-zinc-950 px-4 py-3"
                  >
                    <span>${amount.toLocaleString()}</span>
                    <span>
                      {challenge.currentBankroll >= amount ? "✅" : "⬜"}
                    </span>
                  </div>
                )
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-2xl font-bold">Recent bets</h2>
            <div className="space-y-4">
              {bets.map((bet) => (
                <div key={bet.id} className="rounded-xl bg-zinc-950 p-4">
                  <div className="flex justify-between gap-4">
                    <h3 className="font-bold">{bet.marketTitle}</h3>
                    <span className="text-emerald-400">{bet.result}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">
                    {bet.side} · ${bet.stake} → ${bet.payout}
                  </p>
                  <p className="mt-3 text-sm text-zinc-300">{bet.reasoning}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8">
          <Link
            href="/u/michael"
            className="inline-flex rounded-xl bg-emerald-400 px-5 py-3 font-bold text-zinc-950"
          >
            View public page
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
    </div>
  );
}