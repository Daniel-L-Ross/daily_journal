import { UseJournalEntries, getEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

const eventHub = document.querySelector(".container")
const entryLog = document.querySelector(".entryContainer")

export const EntryListComponent = () => {
    getEntries()
        .then(() => {
            const entries = UseJournalEntries()
            render(entries)
        })
}


const render = entries => {
    let entryHTML = ""
    for (const entry of entries) {
        entryHTML += JournalEntryComponent(entry)
    }
    entryLog.innerHTML = `
    <h2>Entries</h2>
    ${entryHTML}
    `
}

// display current notes on stateChange
eventHub.addEventListener("entryStateChanged", event => {
    getEntries()
        .then(() => {
            const entries = UseJournalEntries()
            render(entries)
        })
})

// listen for moodfilter event
eventHub.addEventListener("moodFilterChosen", event => {
    const selectedMood = event.detail.moodId
    filterEntries(selectedMood)
})

// filter entries against the moodId
const filterEntries = moodId => {
    getEntries()
        .then(() => {
            const allEntries = UseJournalEntries()
            const entries = allEntries.filter(entry => entry.moodId === moodId)
            if (entries.length > 0) {
                render(entries)
            } else {
                entryLog.innerHTML = `
                <p> No entries found for selected mood.</p>`
            }
        })
}