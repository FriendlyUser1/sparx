const formInput = (formName) => {
	let btn = document.getElementById(formName + "-button");
	if (
		document.getElementById(formName + "-id").value.length === 3 &&
		document.getElementById(formName + "-answer").value.length > 0
	) {
		if (btn.classList.contains("disabled")) {
			btn.classList.remove("disabled");
			btn.removeAttribute("disabled");
		}
	} else if (!btn.classList.contains("disabled")) {
		btn.classList.add("disabled");
		btn.setAttribute("disabled", "");
	}
};

const addItem = () => {
	let form = document.getElementById("add-form"),
		id = form.elements[0].value,
		answer = form.elements[1].value;
	(form.elements[0].value = ""), (form.elements[1].value = "");

	console.log(id, answer);
};
