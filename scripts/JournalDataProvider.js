let journal = []

export const UseJournalEntries = () => {
    const journalCopy = journal.slice()
    const sortedByDate = journalCopy.sort(
        (curretEntry, nextEntry) =>
            Date.parse(curretEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(
        parsedEntries => {
            console.table(parsedEntries)
            journal = parsedEntries
        }
        )
    }
    
    export const saveEntry = (entryObject) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
}