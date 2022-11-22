import { buildRegexFromFormat } from "./utils";

export class Format {
	constructor(format, regex = null, example, description = null) {
		this.format = format;

		// Build regex, if not provided
		this.regex = regex || buildRegexFromFormat(format);
		if (typeof this.regex === "string") this.regex = new RegExp(this.regex);
		this.description = description || format;

		// If an example is provided, use it to validate the regex
		if (this.regex && example) {
			if (!Array.isArray(example)) {
				example = [example];
			}

			for (const testCase of example) {
				if (!this.regex.test(testCase)) {
					throw new Error(
						`Example "${testCase}" does not match regex ${this.regex}.\nDescription: ${
							this.description
						}.\nFormat: ${this.format}.\nExample(s): ${this.example.join(", ")}`
					);
				}
			}
		}
	}
}
