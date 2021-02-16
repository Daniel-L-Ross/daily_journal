import { getMoods, saveEntry, useMoods } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")

const contentElement = document.querySelector(".formWrapper")

export const JournalEntryForm = () => {

    getMoods()
        .then(() => {
            const moods = useMoods()

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
        <option value="0">Please select a mood...</option>
            ${moods.map(mood =>`<option value="${mood.id}">${mood.label}</option>`).join("")}
        </select>
        </fieldset>
        <button class="button postEntry__button" id="postEntry">Post Entry</button>
        </form>
        </section>
        `
        })

}

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "postEntry") {
        const newEntry = {
            date: document.querySelector('#journalDate').value,
            concept: document.querySelector('#conceptsCovered').value,
            entry: document.querySelector('#journalEntry').value,
            moodId: parseInt(document.querySelector('#mood').value)
        }
        debugger
        if (newEntry.date === "") {
            alert("Please fill in the date before saving an entry.")
        } else if (newEntry.concept === "" || newEntry.concept.length > 25) {
            alert("You must enter a concept before saving. Please limit the description to 25 characters or less.")
        } else if (newEntry.entry === "" || newEntry.entry.length > 200) {
            alert("You must add an entry before saving. Please limit the entry to 200 characters or less.")
        } else if (newEntry.moodId === 0 ){
            alert("Please select a mood before saving an entry.")
        }
        if (newEntry.date !== "" && newEntry.concept.length > 0 && newEntry.concept.length < 25 && newEntry.entry.length > 0 && newEntry.entry.length < 200 && newEntry.moodId !== 0) {

            saveEntry(newEntry)
        }
    }
})