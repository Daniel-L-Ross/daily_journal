export const JournalEntryComponent = (post) => {
    return `
    <article id="entry--${post.id}"class="journalEntry">
        <div class="postSubject">${post.concept}</div>
        <div class="postDate">${post.date}</div>
        <div class="postMood">${post.mood}</div>
        <div class="postContent">${post.entry}</div>
    </article>
    `
}