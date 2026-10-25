import { profile } from '../data/profile'

export default function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {profile.skills.map((g) => (
        <section key={g.group} className="rounded-3xl border border-line bg-white p-6">
          <h3 className="font-display text-lg font-bold">{g.group}</h3>
          {g.items.length ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full bg-paper px-3 py-1 text-sm font-medium">{s}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm italic text-mute">[Add the skills you genuinely use in src/data/profile.js]</p>
          )}
        </section>
      ))}
    </div>
  )
}
