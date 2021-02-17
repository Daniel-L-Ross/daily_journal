
// this function finds a tag that matches the parameter
export const findTag = subject => {
    return fetch(`http://localhost:8088/tags?subject=${subject}`)
        .then(response => response.json())
}

// this function will save a new tag to the api 
export const saveTag = (newTag) => {
    fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTag)
    })
}