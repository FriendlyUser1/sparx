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
	outputNode.children[0].appendChild(document.createTextNode(message));
};

const clearOutput = () => {
	document.getElementsByClassName("output-container")[0].style.display = "none";
	outputNode.removeChild(outputNode.children[0]);
};
