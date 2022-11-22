import { possibleFormats } from "./list";
import { debouce } from "./utils";

// Fetch elements
const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#result");
const outputTitle = document.querySelector("#output h5");

/**
 * This function updates the output text with the possible matched formats.
 *
 * @param {Array<string>} possibleFormats
 */
function updateOutputUI(possibleFormats) {
	if (!possibleFormats) {
		// Clear
		outputText.innerHTML = "";
		outputTitle.classList.add("hidden");
	} else if (possibleFormats.length <= 0) {
		// Empty
		outputText.innerHTML = "No matches found";
		outputTitle.classList.add("hidden");
	} else {
		// Display matches
		outputText.innerHTML = possibleFormats.join("\n");
		outputTitle.classList.remove("hidden");
	}
}

async function findPossibleFormats(text) {
	const promises = await Promise.all(
		possibleFormats.map(format => {
			if (format.regex.test(text)) return format;
		})
	);

	// Filter out null values
	return promises.filter(x => x).map(x => x.format);
}

/**
 * This function is called when the input text changes.
 */
async function onInput() {
	// Fetch the typed text
	const text = inputText.value;

	// Handle empty query
	if (!text || text.length <= 0) {
		return updateOutputUI(null);
	}

	// Find possible formats
	const matches = await findPossibleFormats(text);

	// Update the output UI
	updateOutputUI(matches);
}

// Attach event listeners
inputText.addEventListener("input", debouce(onInput, 500));
