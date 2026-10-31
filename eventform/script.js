const form = document.querySelector("#ticketForm");
const studentId = document.querySelector("#studentId")
const accessCode = document.querySelector("#accessCode")
const output = document.querySelector("#output");
const type = document.querySelector("#type");

function updateTypeRequirement() {
    const isStudent = type.value === "student";
    const isGuest = type.value === "guest";
	studentId.hidden = !isStudent;
	accessCode.hidden = !isGuest;
	studentId.required = isStudent;
	accessCode.required = isGuest;
}

type.addEventListener("change", updateTypeRequirement);
updateTypeRequirement();

function isPastDate(value) { // we did this wrong in our prep. I'm curious how others in the class did it
    const [y, m, d] = value.split('-');
    return new Date(y, m - 1, d).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0);
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
	output.textContent = "";

	const firstName = form.firstName.value.trim();
	const lastName = form.lastName.value.trim();
	const email = form.email.value.trim();
	const eventDate = form.eventDate.value;
    const ID = form.iNumber.value.trim();
    const code = form.code.value.trim();
    

	if (isPastDate(eventDate)) {
		output.textContent = "Please choose a later date.";
		return;
	}
    else if (!/^\d{9}$/.test(ID) && studentId.required) {
        output.textContent = "Must be a valid 9 digit I number.";
        return;
    }
    else if (code != "EVENT131" && accessCode.required) {
        output.textContent = "Must be a valid code."
        return;
    }

	output.innerHTML = `
		<h2>Ticket Created</h2>
		<p>${firstName} ${lastName}</p>
		<p>${type.value}</p>
		<p>${eventDate}</p>
	`;

	form.reset();
	updateTypeRequirement();
});
