let entryTags = []

export const useEntryTags = () => {
    return entryTags.slice()
}

export const getEntryTags = () => {
    return fetch("http://localhost:8088/entrytags")
        .then(response => response.json())
        .then(
            parsedEntryTags => {
                entryTags = parsedEntryTags
            }
        )
}

// pass in the two foreign keys to create a new entryTag
export const saveEntryTag = (entryId, matchingTag) => {
    const newEntryTag = {
        entryId: entryId,
        tagId: matchingTag
    }
    return fetch("http://localhost:8088/entrytags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntryTag)
    })
}