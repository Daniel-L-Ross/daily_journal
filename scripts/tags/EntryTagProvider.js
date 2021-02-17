// pass in the two foreign keys to create a new entryTag
export const saveEntryTag = (entryId, matchingTag) => {
    const newEntryTag = {
        entryId: entryId,
        tagId: matchingTag
    }
    fetch("http://localhost:8088/entrytags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntryTag)
    })
}