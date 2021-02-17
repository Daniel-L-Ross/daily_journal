// pass in the two foreign keys to create a new entryTag
export const saveEntryTag = (entry.id, matchingTag) => {
    const newEntryTag = {
        entryId: entry.id,
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