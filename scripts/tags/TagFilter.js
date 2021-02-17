import { findTag } from "./TagProvider.js"

const eventHub = document.querySelector('.container')


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
            } else {
                console.log("matchingtag = ", matchingTag)
            }
        })
    })

}) 