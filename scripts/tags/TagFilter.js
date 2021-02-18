import { saveEntryTag } from "./EntryTagProvider.js"
import { findTag, saveTag } from "./TagProvider.js"

const eventHub = document.querySelector('.container')

export const saveTagEntry = (entryTags, entryId) => {
    debugger
    entryTags.map(tag => {
        findTag(tag)
        .then(matches => {

            let matchingTag = null
            if (matches.length > 0) {
                debugger
                matchingTag = matches[0].id
            }
    
            if (matchingTag === null) {
                debugger
                saveTag(tag)
                    .then(new_tag => {
                        saveEntryTag(entryId, new_tag.id)
                    })
            } else {

                saveEntryTag(entryId, matchinTag)
            }
        })
    })

}