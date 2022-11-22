import { Format } from "./format";

export const possibleFormats = [
	// Specials
	new Format("G", null, ["AD", "BC", "Anno Domini", "Before Christ"], "Era"),
	new Format("XXXX", null, ["Z", "-08", "-0830", "-08:30", "-083015", "-08:30:15"], "Era"),
	new Format("yyyy-MM-dd G", null, "1999-03-22 AD", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss.SSS'['VV']'", null, "1999-03-22T05:06:07.000[Europe/Paris]", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss,SSS'['VV']'", null, "1999-03-22T05:06:07,000[Europe/Paris]", ""),
	new Format("yyyy-MM-dd HH:mm:ss.SSS'['VV']'", null, "1999-03-22 05:06:07.000[Europe/Paris]", ""),
	new Format("yyyy-MM-dd HH:mm:ss,SSS'['VV']'", null, "1999-03-22 05:06:07,000[Europe/Paris]", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss.SSS", null, "1999-03-22T05:06:07.000", ""),
	new Format("yyyy-MM-ddXXX", null, "1999-03-22+01:00", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", null, "1999-03-22T05:06:07.000+01:00", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss,SSSXXX", null, "1999-03-22T05:06:07,000+01:00", ""),
	new Format("yyyy-MM-dd HH:mm:ss.SSSXXX", null, "1999-03-22 05:06:07.000+01:00", ""),
	new Format("yyyy-MM-dd HH:mm:ss,SSSXXX", null, "1999-03-22 05:06:07,000+01:00", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ssX", null, "1999-03-22T05:06:07+01", ""),
	new Format("yyyy-MM-dd HH:mm:ssX", null, "1999-03-22 05:06:07+01", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ssXXX", null, "1999-03-22T05:06:07+01:00", ""),
	new Format("yyyy-MM-dd HH:mm:ssXXX", null, "1999-03-22 05:06:07+01:00", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss.SSSXXX'['VV']'", null, "1999-03-22T05:06:07.000+01:00[Europe/Paris]", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss,SSSXXX'['VV']'", null, "1999-03-22T05:06:07,000+01:00[Europe/Paris]", ""),
	new Format("yyyy-MM-dd HH:mm:ss.SSSXXX'['VV']'", null, "1999-03-22 05:06:07.000+01:00[Europe/Paris]", ""),
	new Format("yyyy-MM-dd HH:mm:ss,SSSXXX'['VV']'", null, "1999-03-22 05:06:07,000+01:00[Europe/Paris]", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ssXXX'['VV']'", null, "1999-03-22T05:06:07+01:00[Europe/Paris]", ""),
	new Format("yyyy-MM-dd HH:mm:ssXXX'['VV']'", ""),

	// Timestamp
	new Format("yyyy-MM-dd'T'HH:mm:ss,SSS", null, "1999-03-22T05:06:07,000", ""),
	new Format("yyyy-MM-dd HH:mm:ss.SSS", null, "1999-03-22 05:06:07.000", ""),
	new Format("yyyy-MM-dd HH:mm:ss,SSS", null, "1999-03-22 05:06:07,000", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss", null, "1999-03-22T05:06:07", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss'Z'", null, "1999-03-22T05:06:07Z", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ssZ", null, "1999-03-22T05:06:07Z", ""),
	new Format("yyyy-MM-dd HH:mm:ss'Z'", null, "1999-03-22 05:06:07Z", ""),
	new Format("yyyy-MM-dd HH:mm:ssZ", null, "1999-03-22 05:06:07Z", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", null, "1999-03-22T05:06:07.000Z", ""),
	new Format("yyyy-MM-dd'T'HH:mm:ss,SSS'Z'", null, "1999-03-22T05:06:07,000Z", ""),
	new Format("yyyy-MM-dd HH:mm:ss.SSS'Z'", null, "1999-03-22 05:06:07.000Z", ""),
	new Format("yyyy-MM-dd HH:mm:ss,SSS'Z'", null, "1999-03-22 05:06:07,000Z", ""),

	// Date only
	new Format("yyyyMMddZ", null, "19990322+0100"),
	new Format("yyyyMMdd", null, "19990322", ""),
	new Format("YYYY-MM-DD", null, "2014-12-01"),
	new Format("DD-MM-YYYY", null, "01-12-2014"),
	new Format("MM-DD-YYYY", null, "12-01-2014"),
	new Format("YYYY/MM/DD", null, "2014/12/01"),
	new Format("DD/MM/YYYY", null, "01/12/2014"),
	new Format("MM/DD/YYYY", null, "12/01/2014"),
	new Format("YYYY.MM.DD", null, "2014.12.01"),
	new Format("DD.MM.YYYY", null, "01.12.2014"),
	new Format("MM.DD.YYYY", null, "12.01.2014"),

	// Time formats
	new Format("HH:mm:ss", null, "23:59:59"),
	new Format("HH:mm", null, "12:34"),
	new Format("HH", null, "00"),
	new Format("HH:mm:ss a", null, ["12:34:56 AM", "12:34:56 PM"]),
	new Format("HH:mm a", null, ["12:34 AM", "12:34 PM"]),
	new Format("HH a", null, ["12 AM", "12 PM"]),

	// Epoch
	new Format("epoch", /^\d+$/, "1234567890", "Epoch"),
];
