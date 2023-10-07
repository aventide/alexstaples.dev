import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

export default function PDFResume() {
  return (
    <Document>
      <Page size="A4">
        <Text>Hi</Text>
      </Page>
    </Document>
  );
}