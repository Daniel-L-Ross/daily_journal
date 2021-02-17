export const moodFilter = moods => {
    return `
    <form action="">
    <fieldset class="moodFilter__options">
    <legend>Filter Journal Entries by Mood</legend>
    ${moods.map(mood => 
        `<input type="radio" name="moodFilter" value="${mood.id}">
        <label for="moodFilter--${mood.label}">${mood.label}</label>`
        ).join("")}
    </fieldset>
    </form>`
}