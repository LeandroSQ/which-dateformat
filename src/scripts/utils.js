/**
 * This function constructs a RegExp given a date format string.
 *
 * @param {string} format The format string to convert to a RegExp
 * @returns {RegExp} regex The regular expression to match the format
 */
export function buildRegexFromFormat(format) {
    try {
        const l = format
            .replace(/[\[\]\(\)\{\}\^\$\+\-\*\?\.\,]/g, "\\$&") // Escape regex special characters
            .replace("MM", "(0?[1-9]|1[0-2])") // Replace month with regex
            // .replace(/DDD/i, "(0?[1-9]|[12][0-9]|3[01])") // Replace day of year with regex
            .replace(/DD/i, "(0?[1-9]|[12][0-9]|3[01])") // Replace day with regex
            .replace(/YYYY/i, "\\d{4}") // Replace year with regex
            .replace(/YY/i, "\\d{2}") // Replace year with regex
            .replace(/HH/i, "(0?[0-9]|1[0-9]|2[0-3])") // Replace hour with regex
            .replace("mm", "(0?[0-9]|[1-5][0-9])") // Replace minute with regex
            .replace("ss", "(0?[0-9]|[1-5][0-9])") // Replace second with regex
            .replace("SSS", "\\d{3}") // Replace millisecond with regex
            .replace("SS", "\\d{2}") // Replace millisecond with regex
            .replace("S", "\\d{1}") // Replace millisecond with regex
            .replace(/a/i, "(AM|am|PM|pm)") // Replace meridiem with regex
            .replace(/Z/g, "([\\+\\-]?((0{0,3}[0-9]|0{0,2}[1-9][0-9]|0?[1-9][0-9]{2}|[1-9][0-9]{3})|\\d{2}:\\d{2}|Z))?") // Replace timezone with regex
            .replace(/G{1,4}/, "([A-Z]{2,4}|[a-zA-Z ]+)") // Replace era with regex
            .replace(/X{1,4}/, "(Z|[\\+\\-]?(\\d{2}|\\d{2}:\\d{2}|\\d{2}:\\d{2}:\\d{2}|\\d{2,6}))") // Replace era with regex
            .replace(/VV/i, "([A-Z]{2,4}|[a-zA-Z \\/]+)") // Replace timezone name with regex
            .replace(/[\'\"](.*?)[\'\"]/g, "$1"); // Remove quotes

        return new RegExp(`^${l}$`);
    } catch (e) {
        console.error(`Error building regex from format: ${format}`);
        console.error(e);
    }
}

/**
 * This function debounces an event listener, ensuring that it is max called once every X milliseconds.
 *
 * @param {Function} func The function to debounce
 * @param {number} delay The delay in milliseconds
 * @returns {Function} The debounced function
 */
export function debouce(func, delay) {
  	let timer;

	return function() {
		let context = this;
		let args = arguments;

		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
}