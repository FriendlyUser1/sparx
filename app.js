// inputs

const formInput = (formName) => {
	let btn = document.getElementById(formName + "-button");
	if (
		document.getElementById(formName + "-id").value.length === 3 &&
		(formName === "get" ||
			document.getElementById(formName + "-answer").value.length > 0)
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

// processing

const addItem = () => {
	let form = document.getElementById("add-form"),
		id = form.elements[0].value,
		answer = form.elements[1].value;

	try {
		localStorage.setItem(id, answer);
		output(false, `Item ${id} added successfully!`);
	} catch {
		output(
			true,
			"Error adding item, try refreshing the page or clearing storage (top right)."
		);
	}

	form.elements[0].value = "";
	form.elements[1].value = "";
};

const getItem = () => {
	let id = document.getElementById("get-id").value;

	if (!localStorage[id]) return output(true, "No items found with ID " + id);

	let storedItem = localStorage.getItem(id);
	output(false, `Item ${id} has answer "${storedItem}"`);

	document.getElementById("get-id").value = "";
};

// output

const outputNode = document.getElementsByClassName("output")[0];

const output = (isError, message) => {
	if (outputNode.children.length > 0) clearOutput();
	outputNode.style.backgroundColor = isError
		? "rgba(247, 60, 60, 0.486)"
		: "rgba(27, 255, 57, 0.37)";
	outputNode.parentElement.style.display = "flex";
	outputNode.appendChild(document.createElement("p"));
	outputNode.children[0].innerHTML = message;
};

const clearOutput = () => {
	document.getElementsByClassName("output-container")[0].style.display = "none";
	outputNode.removeChild(outputNode.children[0]);
};
