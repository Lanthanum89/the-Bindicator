// Reference only — browsers can't execute .ts directly.
// The live artifact (bin-day-checker.html) runs the JS equivalent of this.
// Compile with tsc or bundle via esbuild/vite if you fold this into a build pipeline.

interface CollectionDay {
  date: string;       // ISO yyyy-mm-dd
  recycling: boolean;
  black: boolean;
  xmasPeriod: boolean; // dates the council hasn't confirmed yet
}

interface NextCollection {
  date: Date;
  recycling: boolean;
  black: boolean;
  xmasPeriod: boolean;
  isToday: boolean;
}

const schedule: CollectionDay[] = [
  { date: "2026-04-02", recycling: false, black: true,  xmasPeriod: false },
  { date: "2026-04-09", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-04-16", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-04-23", recycling: true,  black: true,  xmasPeriod: false },
  { date: "2026-04-30", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-05-07", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-05-14", recycling: false, black: true,  xmasPeriod: false },
  { date: "2026-05-21", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-05-28", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-06-04", recycling: true,  black: true,  xmasPeriod: false },
  { date: "2026-06-11", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-06-18", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-06-25", recycling: false, black: true,  xmasPeriod: false },
  { date: "2026-07-02", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-07-09", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-07-16", recycling: true,  black: true,  xmasPeriod: false },
  { date: "2026-07-23", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-07-30", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-08-06", recycling: false, black: true,  xmasPeriod: false },
  { date: "2026-08-13", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-08-20", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-08-27", recycling: true,  black: true,  xmasPeriod: false },
  { date: "2026-09-03", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-09-10", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-09-17", recycling: false, black: true,  xmasPeriod: false },
  { date: "2026-09-24", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-10-01", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-10-08", recycling: true,  black: true,  xmasPeriod: false },
  { date: "2026-10-15", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-10-22", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-10-29", recycling: false, black: true,  xmasPeriod: false },
  { date: "2026-11-05", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-11-12", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-11-19", recycling: true,  black: true,  xmasPeriod: false },
  { date: "2026-11-26", recycling: false, black: false, xmasPeriod: false },
  { date: "2026-12-03", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-12-10", recycling: false, black: true,  xmasPeriod: false },
  { date: "2026-12-17", recycling: true,  black: false, xmasPeriod: false },
  { date: "2026-12-24", recycling: false, black: false, xmasPeriod: true  },
  { date: "2026-12-31", recycling: true,  black: true,  xmasPeriod: true  },
  { date: "2027-01-07", recycling: false, black: false, xmasPeriod: true  },
  { date: "2027-01-14", recycling: true,  black: false, xmasPeriod: true  },
  { date: "2027-01-21", recycling: false, black: true,  xmasPeriod: false },
  { date: "2027-01-28", recycling: true,  black: false, xmasPeriod: false },
  { date: "2027-02-04", recycling: false, black: false, xmasPeriod: false },
  { date: "2027-02-11", recycling: true,  black: true,  xmasPeriod: false },
  { date: "2027-02-18", recycling: false, black: false, xmasPeriod: false },
  { date: "2027-02-25", recycling: true,  black: false, xmasPeriod: false },
  { date: "2027-03-04", recycling: false, black: true,  xmasPeriod: false },
  { date: "2027-03-11", recycling: true,  black: false, xmasPeriod: false },
  { date: "2027-03-18", recycling: false, black: false, xmasPeriod: false },
  { date: "2027-03-25", recycling: true,  black: true,  xmasPeriod: false },
];

function getNextCollection(schedule: CollectionDay[], from: Date = new Date()): NextCollection | null {
  const today = new Date(from);
  today.setHours(0, 0, 0, 0);

  for (const day of schedule) {
    const d = new Date(`${day.date}T00:00:00`);
    if (d >= today) {
      return {
        date: d,
        recycling: day.recycling,
        black: day.black,
        xmasPeriod: day.xmasPeriod,
        isToday: d.getTime() === today.getTime(),
      };
    }
  }
  return null;
}

export { schedule, getNextCollection, CollectionDay, NextCollection };
