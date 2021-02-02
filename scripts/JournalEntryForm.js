import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")

const contentElement = document.querySelector(".contentContainer")

export const JournalEntryForm = () => {
    contentElement.innerHTML = `
    <section class="formContainer">
    <form action="">
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate" class="formOption">
        </fieldset>
        <fieldset>
            <label for="conceptsCovered">Concepts Covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCovered" class="formOption">
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea type="textarea" name="journalEntry" id="journalEntry" class="formOption"></textarea>
        </fieldset>
        <fieldset>
            <label for="mood">Mood for the Day</label>
            <select name="mood" id="mood">
                <option value="happy">Happy</option>
                <option value="excited">Excited</option>
                <option value="calm">Calm</option>
                <option value="content">Content</option>
                <option value="relaxed">Relaxed</option>
                <option value="sad">Sad</option>
                <option value="nervous">Nervous</option>
                <option value="upset">Upset</option>
                <option value="tense">Tense</option>
            </select>
        </fieldset>
        <button class="button postEntry__button" id="postEntry">Post Entry</button>
    </form>
</section>
    `
}

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "postEntry") {
        debugger
        const newEntry = {
            date: document.querySelector('#journalDate').value,
            concept: document.querySelector('#conceptsCovered').value,
            entry: document.querySelector('#journalEntry').value,
            mood: document.querySelector('#mood').value
        }
        saveEntry(newEntry)
    }
})