import {
	Document,
	Font,
	Image,
	Page,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";
import React from "react";

import FigtreeBoldFont from "../assets/fonts/Figtree-Bold.ttf";
import LatoBoldFont from "../assets/fonts/Lato-Bold.ttf";
import LatoRegularFont from "../assets/fonts/Lato-Regular.ttf";
import text from "../assets/text/cover-letter.json";

import MailIcon from "../assets/icons/resume/mail.png";
import LocationIcon from "../assets/icons/resume/map-pin.png";
import PhoneIcon from "../assets/icons/resume/phone.png";

// disable hyphenation wrapping
Font.registerHyphenationCallback((word) => [word]);
Font.register({ family: "Figtree", src: FigtreeBoldFont });
Font.register({
	family: "Lato",
	fonts: [{ src: LatoRegularFont }, { src: LatoBoldFont, fontWeight: "bold" }],
});
const headingFontSize = "10pt";
const bodyFontSize = "12pt";

function Header() {
	const styles = StyleSheet.create({
		header: {
			paddingTop: "16pt",
			paddingBottom: "48pt",
			paddingHorizontal: "12pt",
			flexDirection: "row",
			display: "flex",
		},
		headerLeftSide: {
			flex: 2,
		},
		headerRightSide: {
			flex: 1,
			alignItems: "flex-end",
			justifyContent: "flex-start",
			paddingTop: "8pt",
		},
		title: {
			fontWeight: "bold",
			fontSize: "28pt",
			fontFamily: "Figtree",
		},
		subTitle: {
			fontFamily: "Lato",
			fontSize: "10pt",
			marginTop: "8pt",
		},
	});

	return (
		<View style={styles.header}>
			<View style={styles.headerLeftSide}>
				<Text style={styles.title}>{text.title}</Text>
			</View>
			<View style={styles.headerRightSide}>
				<HeaderDetail icon={LocationIcon} textContent={text.address} />
				<HeaderDetail icon={MailIcon} textContent={text.email} />
				<HeaderDetail icon={PhoneIcon} textContent="508 353 5350" />
			</View>
		</View>
	);
}

function HeaderDetail({ textContent, icon }) {
	return (
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			<Image
				src={icon}
				style={{ height: headingFontSize, marginRight: "6pt" }}
			/>
			<Text
				style={{
					fontSize: headingFontSize,
					marginVertical: "1pt",
					fontFamily: "Lato",
				}}
			>
				{textContent}
			</Text>
		</View>
	);
}

function TextSection({ textContent }) {
	return (
		<Text
			style={{
				fontSize: bodyFontSize,
				marginBottom: "12pt",
				fontFamily: "Lato",
			}}
		>
			{textContent}
		</Text>
	);
}

export default function PDFResume() {
	const formattedDate = `${
		[
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		][new Date().getMonth()]
	} ${new Date().getDate()}, ${new Date().getFullYear()}`;
	return (
		<Document>
			<Page size="LETTER">
				<View style={{ margin: "12pt" }}>
					<View style={{ height: "12pt", backgroundColor: "#A82623" }} />
					<Header />
					<View style={{ display: "flex", justifyContent: "center" }}>
						<View style={{ paddingHorizontal: "36pt" }}>
							<Text
								style={{
									fontSize: "10pt",
									marginBottom: "12pt",
									fontFamily: "Lato",
									fontWeight: "bold",
								}}
							>
								{formattedDate}
							</Text>
							<TextSection textContent={text.greeting} />
							<TextSection textContent={text.introduction} />
							<TextSection textContent={text.body1} />
							<TextSection textContent={text.body2} />
							<TextSection textContent={text.conclusion} />
							<TextSection textContent={text.signOffWordChoice} />
							<TextSection textContent={text.signOff} />
						</View>
					</View>
				</View>
			</Page>
		</Document>
	);
}
