const eventHub = document.querySelector('.container')

export const JournalEntryComponent = (post) => {
    return `
    <article id="entry--${post.id}"class="journalEntry">
        <div class="postHeader">
            <div class="postDate">Date: ${post.date}</div>
            <div class="postSubject">Subjects Covered: ${post.concept}</div>
            <div class="postMood">Mood: ${post.mood.label}</div>
        </div>
        <div class="postContent">${post.entry}</div>
        <button id="deleteEntry--${post.id}">Delete</button>
    </article>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        const deleteEntryClicked = new CustomEvent("deleteEntry", {
            detail: {
                entryId: parseInt(id)
            }
        })
        eventHub.dispatchEvent(deleteEntryClicked)
    }
})