import { UseJournalEntries, getEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'


export const EntryListComponent = () => {
    getEntries()
        .then(() => {
            const entries = UseJournalEntries()
            const entryLog = document.querySelector('.container')
            let entryHTML = ""
            for (const entry of entries) {
                entryHTML += JournalEntryComponent(entry)
            }

            entryLog.innerHTML += `
        <section class="entryContainer">
            ${entryHTML}
        </section>
    `
        })
}