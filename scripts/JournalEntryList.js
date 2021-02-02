import { UseJournalEntries, getEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

const eventHub = document.querySelector(".container")

export const EntryListComponent = () => {
    getEntries()
        .then(() => {
            const entries = UseJournalEntries()
            const entryLog = document.querySelector('.entryContainer')
            let entryHTML = ""
            for (const entry of entries) {
                entryHTML += JournalEntryComponent(entry)
            }

            entryLog.innerHTML = `
            ${entryHTML}
            `
        })
}

eventHub.addEventListener("entryStateChanged", event => {
    EntryListComponent()
})