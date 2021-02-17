let tags = []

export const useTags = () => {
    return tags.slice()
}

export const getTags = () => {
    return fetch("http://localhost:8088/tags")
    .then(response => response.json())
    .then(
        parsedTags => {
            tags = parsedTags
        }
    )
    }

// this function finds a tag that matches the parameter
export const findTag = subject => {
    return fetch(`http://localhost:8088/tags?subject=${subject}`)
        .then(response => response.json())
}

// this function will save a new tag to the api 
export const saveTag = (newTag) => {
    return fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTag)
    })
}

