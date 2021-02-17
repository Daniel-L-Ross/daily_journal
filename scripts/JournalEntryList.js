import { UseJournalEntries, getEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'
import { getEntryTags, useEntryTags } from './tags/EntryTagProvider.js'
import { getTags, useTags } from './tags/TagProvider.js'

const eventHub = document.querySelector(".container")
const entryLog = document.querySelector(".entryContainer")

export const EntryListComponent = () => {
    getEntries()
        .then(getTags)
        .then(getEntryTags)
        .then(() => {
            const entries = UseJournalEntries()
            const tags = useTags()
            const entryTags = useEntryTags()
            render(entries, entryTags, tags)
        })
}


const render = (entries, allEntryTags, allTags) => {
    const entryHTML = entries.map(entryObject => {
        const relatedEntryTags = allEntryTags.filter(entryTag => entryObject.id === entryTag.entryId)
        const tags = relatedEntryTags.map(entryTag => {
            const matchingTags = allTags.find(tag => tag.id === entryTag.tagId)
            return matchingTags
        })
        return JournalEntryComponent(entryObject, tags)
    }).join("")

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