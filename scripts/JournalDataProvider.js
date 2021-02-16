let journal = []

const eventHub = document.querySelector(".container")

export const UseJournalEntries = () => {
    const journalCopy = journal.slice()
    const sortedByDate = journalCopy.sort(
        (curretEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(curretEntry.date)
    )
    return sortedByDate
}

const dispatchStateChangeEvent = () => {
    const entriesChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entriesChangedEvent)
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(
        parsedEntries => {
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
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}