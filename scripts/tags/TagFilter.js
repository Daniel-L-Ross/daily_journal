import { saveEntryTag } from "./EntryTagProvider.js"
import { findTag, saveTag } from "./TagProvider.js"

const eventHub = document.querySelector('.container')

export const saveTagEntry = (entryTags) => {

}

eventHub.addEventListener('tagEvent', customEvent => {
    const entryTags = customEvent.detail.tags 

    entryTags.map(tag => {
        findTag(tag)
        .then(matches => {
            debugger
            let matchingTag = null
            if (matches.length > 0) {
                matchingTag = matches[0].id
            }

            if (matchingTag === null) {
                console.log("matchingTag was null")
                saveTag(tag)
                    .then(new_tag => {
                        saveEntryTag(entry.id, new_tag.id)
                    })
            } else {
                console.log("matchingtag = ", matchingTag)
                saveEntryTag(entry.id, matchinTag)
            }
        })
    })

}) 