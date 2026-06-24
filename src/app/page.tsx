export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4">
        $10 Tip Challenge
      </h1>

      <p className="text-xl mb-8">
        Turn a $10 tip into $5,000.
      </p>

      <div className="grid gap-4">
        <div className="border rounded p-4">
          <h2 className="font-bold">Current Bankroll</h2>
          <p className="text-4xl">$100</p>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-bold">Goal</h2>
          <p className="text-4xl">$5,000</p>
        </div>
      </div>
    </main>
  );
}