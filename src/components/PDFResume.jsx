import React from "react";
import { Document, Page, Text, View, Font, StyleSheet, Image } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

import FigtreeBoldFont from '../assets/fonts/Figtree-Bold.ttf';
import LatoRegularFont from '../assets/fonts/Lato-Regular.ttf';
import text from '../assets/text/resume.json';

import PhoneIcon from '../assets/icons/resume/phone.png';
import MailIcon from '../assets/icons/resume/mail.png';
import LocationIcon from '../assets/icons/resume/map-pin.png';

// disable hyphenation wrapping
Font.registerHyphenationCallback(word => [word]);
Font.register({ family: 'Figtree', src: FigtreeBoldFont });
Font.register({ family: 'Lato', src: LatoRegularFont });


const tw = createTw({
    theme: {
        extend: {},
        fontFamily: {
            body: ['Lato', 'sans-serif'],
            heading: ['Figtree', 'sans-serif'],
        },
    },
});

const styles = StyleSheet.create({
    accentStripe: {

    },
    header: {
        backgroundColor: '#eeeeee',
        paddingTop: '12pt',
        paddingBottom: '24pt',
        paddingHorizontal: '12pt',
        flexDirection: 'row',
        display: 'flex'
    },
    headerLeftSide: {
        flex: 1
    },
    headerRightSide: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    headerDetail: {
        fontSize: '10pt',
        marginVertical: '1pt',
        fontFamily: 'Figtree'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '28pt',
        textTransform: 'uppercase',
        fontFamily: 'Figtree'
    },
    subTitle: {
        fontFamily: 'Lato',
        fontSize: '12pt'
    }
})

function Header() {
    return <View style={styles.header}>
        <View style={styles.headerLeftSide}>
            <Text style={styles.title}>{text.author}</Text>
            <Text style={styles.subTitle}>{text.tagline}</Text>
        </View>
        <View style={styles.headerRightSide}>
            <HeaderDetail icon={LocationIcon} text={text.address} />
            <HeaderDetail icon={MailIcon} text={text.email} />
            <HeaderDetail icon={PhoneIcon} text="508 353 5350" />
        </View>
    </View>

}

function ResumeSection({ title, children }) {
    return <View style={{ paddingTop: "12pt", flexDirection: "row" }}>
        <View style={{ marginHorizontal: "16pt" }}>
            <Text style={{ fontFamily: "Figtree", textTransform: "uppercase", fontSize: "12pt" }}>{title}</Text>
            <View style={{ height: "1.5pt", backgroundColor: "black", marginVertical: "2pt" }}></View>
            <View style={{ marginTop: '4pt' }}>{children}</View>
        </View>
        <View></View>
    </View>
}

function HeaderDetail({ text, icon }) {
    return <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image src={icon} style={{ height: '10pt', marginRight: "6pt" }} />
        <Text style={styles.headerDetail}>{text}</Text>
    </View>
}

function Job({ company, ...rest }) {
    const companyKey = text.jobs[company];
    const { label, sublabel, time, bullets, clients, tech } = companyKey;

    return (
        <ResumeEntry label={label} sublabel={sublabel} time={time} {...rest}>
            <View style={{ flexDirection: "column" }}>
                {bullets.map((bullet, index) => (
                    <View style={{ flexDirection: "row", fontSize: "9pt" }}>
                        <Text style={{ marginHorizontal: 4, fontSize: "9pt" }}>•</Text>
                        <Text style={{ fontSize: '9pt', fontFamily: 'Lato', marginBottom: '2pt' }} key={index}>{bullet}</Text>
                    </View>
                ))}
            </View>

            {/* {clients && (
                <Text>
                    <Text style={{ fontSize: '9pt', fontFamily: 'Figtree' }}>{text.clients}: </Text>
                    <Text style={{ fontSize: '9pt', fontFamily: 'Lato' }}>{clients}</Text>
                </Text>
            )}

            <Text>
                <Text style={{ fontSize: '9pt', fontFamily: 'Figtree' }}>{text.keyTechnologies}: </Text>
                <Text style={{ fontSize: '9pt', fontFamily: 'Lato' }}>{tech}</Text>
            </Text> */}

        </ResumeEntry>
    );
}

function ResumeEntry({ children, label, sublabel, time }) {

    const resumeEntryStyles = StyleSheet.create({
        entryContainer: {
            marginBottom: 10,
        },
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },
        labelContainer: {
            flexDirection: 'row',
        },
        labelText: {
            fontSize: '10pt',
            fontFamily: 'Figtree',
            marginRight: '4pt',
        },
        subLabelText: {
            fontSize: '10pt',
            marginLeft: '4pt',
            fontFamily: 'Lato'
        },
        timeText: {
            fontSize: '10pt',
            fontFamily: 'Lato'
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
                    <Text style={{ fontFamily: "Figtree", fontSize: '10pt' }}>|</Text>
                    <Text style={resumeEntryStyles.subLabelText}>{sublabel}</Text>
                </View>
                <Text style={resumeEntryStyles.timeText}>{time}</Text>
            </View>
            <View style={resumeEntryStyles.childrenContainer}>{children}</View>
        </View>
    );
}

export default function PDFResume() {
    return (
        <Document>
            <Page size="A4">
                <View style={{ margin: "12pt" }}>
                    <View style={tw("h-4 bg-red-500")}></View>
                    <Header />
                    <View style={{flexDirection: "row"}}>
                        <View style={{ width: '70%' }}>
                            <ResumeSection title="professional experience">
                                <Job company="wasabi" open />
                                <Job company="motifSoftware" />
                                <Job company="tandemSeven" />
                                <Job company="ca" />
                            </ResumeSection>
                        </View>
                        <View style={{ width: '30%' }}>\
                            <ResumeSection title="Skills"></ResumeSection>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}