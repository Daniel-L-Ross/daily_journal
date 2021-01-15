import { UseJournalEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'


export const EntryListComponent = () => {
    const entries = UseJournalEntries()
    const entryLog = document.querySelector('.container')

    let entryHTML = ""
    for (const entry of entries) {
        entryHTML += JournalEntryComponent(entry)
    }

    entryLog.innerHTML += `
        <section class="journalContainer">
            ${entryHTML}
        </section>
    `
}