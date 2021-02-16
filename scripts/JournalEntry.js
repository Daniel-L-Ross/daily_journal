export const JournalEntryComponent = (post) => {
    return `
    <article id="entry--${post.id}"class="journalEntry">
        <div class="postHeader">
            <div class="postDate">Date: ${post.date}</div>
            <div class="postSubject">Subjects Covered: ${post.concept}</div>
            <div class="postMood">Mood: ${post.mood.label}</div>
        </div>
        <div class="postContent">${post.entry}</div>
    </article>
    `
}