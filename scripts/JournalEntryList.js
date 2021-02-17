import { UseJournalEntries, getEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

const eventHub = document.querySelector(".container")
const entryLog = document.querySelector(".entryContainer")

export const EntryListComponent = () => {
    getEntries()
        .then(() => {
            const entries = UseJournalEntries()
                    // ADD ADITIONAL PARAMETERS

            render(entries)
        })
}


const render = (entries, allEntryTags, allTags => {
    const entryHTML = entries.map(entryObject => {
        
        
        JournalEntryComponent(entryObject, tags)
        
    })

    entryLog.innerHTML = `
    <h2>Entries</h2>
    ${entryHTML}
    `
})

// display current notes on stateChange
eventHub.addEventListener("entryStateChanged", event => {
    getEntries()
        .then(() => {
            const entries = UseJournalEntries()
        // ADD ADITIONAL PARAMETERS
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
                // ADD ADITIONAL PARAMETERS
                render(entries)
            } else {
                entryLog.innerHTML = `
                <p> No entries found for selected mood.</p>`
            }
        })
}