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

eventHub.addEventListener("entryStateChanged", event => {
    getEntries()
    .then(EntryListComponent)
})