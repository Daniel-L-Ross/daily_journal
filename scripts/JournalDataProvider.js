const journal = [
    {
        id: 1,
        date: "01/05/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Excited",
    },
    {
        id: 2,
        date: "01/06/2021",
        concept: "Terminal Basics",
        entry: "Today we went over commands in the terminal. We discussed some syntax as well as the most important commands to know,",
        mood: "Content",
    },
    {
        id: 3,
        date: "01/07/2021",
        concept: "Git & Github",
        entry: "We covered git commands in the terminal as well as the high-level github workflow.",
        mood: "Confused",
    }
]

export const UseJournalEntries = () => {
    const sortedByDate = journal.sort(
        (curretEntry, nextEntry) =>
            Date.parse(curretEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
