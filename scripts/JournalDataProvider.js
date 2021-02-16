let journal = []
let moods = []

const eventHub = document.querySelector(".container")

export const UseJournalEntries = () => {
    const journalCopy = journal.slice()
    const sortedByDate = journalCopy.sort(
        (curretEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(curretEntry.date)
    )
    return sortedByDate
}

export const useMoods = () => {
    return moods.slice()

}

const dispatchStateChangeEvent = () => {
    const entriesChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entriesChangedEvent)
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
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

const deleteEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

eventHub.addEventListener("deleteEntry", deleteEvent => {
    const id = deleteEvent.detail.entryId
    deleteEntry(id)
})

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
        .then(response => response.json())
        .then(
            parsedMoods => {
                moods = parsedMoods
            }
        )
}