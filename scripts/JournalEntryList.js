import { UseJournalEntries, getEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

const eventHub = document.querySelector(".container")
const entryLog = document.querySelector(".entryContainer")

export const EntryListComponent = () => {
    getEntries()
        .then(() => {
            const entries = UseJournalEntries()
            let entryHTML = ""
            for (const entry of entries) {
                entryHTML += JournalEntryComponent(entry)
            }
            entryLog.innerHTML = `
           <h2>Entries</h2>
            ${entryHTML}
            `
        })
}

const render = entries => {
    // #1 refactor EntryListComponent so it calls rener
    // #2 add an event listener that calls render for the specific value of the mood selected
}

eventHub.addEventListener("entryStateChanged", event => {
    getEntries()
    .then(EntryListComponent)
})