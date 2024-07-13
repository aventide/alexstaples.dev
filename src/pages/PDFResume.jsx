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
import LatoRegularFont from "../assets/fonts/Lato-Regular.ttf";
import text from "../assets/text/resume.json";

import MailIcon from "../assets/icons/resume/mail.png";
import LocationIcon from "../assets/icons/resume/map-pin.png";
import PhoneIcon from "../assets/icons/resume/phone.png";

// disable hyphenation wrapping
Font.registerHyphenationCallback((word) => [word]);
Font.register({ family: "Figtree", src: FigtreeBoldFont });
Font.register({ family: "Lato", src: LatoRegularFont });

const headingFontSize = "10pt";
const bodyFontSize = "9pt";

function Header() {
	const styles = StyleSheet.create({
		header: {
			paddingTop: "16pt",
			paddingBottom: "32pt",
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
			fontSize: "32pt",
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
				<Text style={styles.subTitle}>{text.summary}</Text>
			</View>
			<View style={styles.headerRightSide}>
				<HeaderDetail icon={LocationIcon} text={text.address} />
				<HeaderDetail icon={MailIcon} text={text.email} />
				<HeaderDetail icon={PhoneIcon} text="508 353 5350" />
			</View>
		</View>
	);
}

function ResumeSection({ title, children }) {
	return (
		<View style={{ paddingTop: "12pt", flexDirection: "row" }}>
			<View style={{ marginHorizontal: "16pt", width: "100%" }}>
				<Text
					style={{
						fontFamily: "Figtree",
						textTransform: "uppercase",
						fontSize: "12pt",
					}}
				>
					{title}
				</Text>
				<View
					style={{
						height: "1.5pt",
						backgroundColor: "black",
						marginTop: "2pt",
						marginBottom: "4pt",
					}}
				/>
				<View style={{ marginTop: "4pt" }}>{children}</View>
			</View>
		</View>
	);
}

function HeaderDetail({ text, icon }) {
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
				{text}
			</Text>
		</View>
	);
}

function Job({ company, ...rest }) {
	const companyKey = text.jobs[company];
	const { employer, jobTitle, timeWithMonth, bullets } = companyKey;

	return (
		<ResumeEntry
			label={employer}
			sublabel={jobTitle}
			time={timeWithMonth}
			{...rest}
		>
			<View style={{ flexDirection: "column" }}>
				{bullets.map((bullet) => (
					<View
						style={{ flexDirection: "row", fontSize: bodyFontSize }}
						key={bullet}
					>
						<Text style={{ marginHorizontal: 4, fontSize: bodyFontSize }}>
							•
						</Text>
						<Text
							style={{
								fontSize: bodyFontSize,
								fontFamily: "Lato",
								marginBottom: "4pt",
								maxWidth: "97%",
							}}
						>
							{bullet}
						</Text>
					</View>
				))}
			</View>
		</ResumeEntry>
	);
}

function ResumeEntry({ children, label, sublabel, time }) {
	const resumeEntryStyles = StyleSheet.create({
		entryContainer: {
			marginBottom: 16,
		},
		headerContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			marginBottom: "8pt",
		},
		labelContainer: {
			flexDirection: "row",
		},
		labelText: {
			fontSize: headingFontSize,
			fontFamily: "Figtree",
			marginRight: "4pt",
		},
		subLabelText: {
			fontSize: headingFontSize,
			marginLeft: "4pt",
			fontFamily: "Lato",
		},
		timeText: {
			fontSize: headingFontSize,
			fontFamily: "Lato",
		},
		childrenContainer: {
			marginLeft: 4,
		},
	});

	return (
		<View style={resumeEntryStyles.entryContainer}>
			<View style={resumeEntryStyles.headerContainer}>
				<View style={resumeEntryStyles.labelContainer}>
					<Text style={resumeEntryStyles.labelText}>{label}</Text>
					<Text style={{ fontFamily: "Figtree", fontSize: headingFontSize }}>
						|
					</Text>
					<Text style={resumeEntryStyles.subLabelText}>{sublabel}</Text>
				</View>
				<Text style={resumeEntryStyles.timeText}>({time})</Text>
			</View>
			<View style={resumeEntryStyles.childrenContainer}>{children}</View>
		</View>
	);
}

function SkillCategory({ title, skillList }) {
	return (
		<View style={{ marginBottom: "12pt" }}>
			<Text
				style={{
					fontSize: headingFontSize,
					fontFamily: "Figtree",
					marginRight: "4pt",
					marginBottom: "4pt",
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					fontSize: bodyFontSize,
					fontFamily: "Lato",
					marginRight: "4pt",
				}}
			>
				{skillList.join(", ")}
			</Text>
		</View>
	);
}

export default function PDFResume() {
	return (
		<Document>
			<Page size="LETTER">
				<View style={{ margin: "12pt" }}>
					<View style={{ height: "12pt", backgroundColor: "#A82623" }} />
					<Header />
					<View style={{ flexDirection: "row" }}>
						<View style={{ width: "70%" }}>
							<ResumeSection title="professional experience">
								<Job company="wasabi" open />
								<Job company="motifSoftware" />
								<Job company="genpact" />
								<Job company="ca" />
							</ResumeSection>
						</View>
						<View style={{ width: "30%" }}>
							\
							<ResumeSection title="Skills">
								<SkillCategory title="Web" skillList={text.skills.Web} />
								<SkillCategory
									title="Libraries"
									skillList={text.skills.Libraries}
								/>
								<SkillCategory title="Tools" skillList={text.skills.Tools} />
								<SkillCategory
									title="Concepts"
									skillList={text.skills.Concepts}
								/>
								<SkillCategory
									title="Programming Languages"
									skillList={text.skills["Programming Languages"]}
								/>
							</ResumeSection>
							<ResumeSection title="Portfolio">
								<View style={{ flexDirection: "row", marginBottom: "8pt" }}>
									<Text
										style={{
											fontSize: headingFontSize,
											fontFamily: "Figtree",
											marginRight: "4pt",
										}}
									>
										Github
									</Text>
									<Text
										style={{ fontFamily: "Figtree", fontSize: headingFontSize }}
									>
										|
									</Text>
									<Text
										style={{
											fontSize: headingFontSize,
											marginLeft: "4pt",
											fontFamily: "Lato",
										}}
									>
										{text.portfolio.github.title}
									</Text>
								</View>
								<View style={{ flexDirection: "row", marginBottom: "8pt" }}>
									<Text
										style={{
											fontSize: headingFontSize,
											fontFamily: "Figtree",
											marginRight: "4pt",
										}}
									>
										Website
									</Text>
									<Text
										style={{ fontFamily: "Figtree", fontSize: headingFontSize }}
									>
										|
									</Text>
									<Text
										style={{
											fontSize: headingFontSize,
											marginLeft: "4pt",
											fontFamily: "Lato",
										}}
									>
										{text.portfolio.site.title}
									</Text>
								</View>
							</ResumeSection>
							<ResumeSection title="Education">
								<View style={{ marginBottom: "4pt" }}>
									<Text
										style={{
											fontSize: bodyFontSize,
											fontFamily: "Figtree",
											marginBottom: "4pt",
										}}
									>
										{text.education.name}
									</Text>
									<Text style={{ fontSize: bodyFontSize, fontFamily: "Lato" }}>
										{text.education.degree} in {text.education.major}
									</Text>
								</View>
							</ResumeSection>
						</View>
					</View>
					<View
						style={{
							marginTop: "72pt",
							height: "12pt",
							backgroundColor: "#A82623",
						}}
					/>
				</View>
			</Page>
		</Document>
	);
}
