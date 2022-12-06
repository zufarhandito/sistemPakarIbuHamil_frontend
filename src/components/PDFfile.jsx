import React from 'react';
import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';

const PDFfile = () => {
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4'
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        }
      });
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <Text>
      Anjay Mabar
      </Text>
      <Text render={({pageNumber,totalPages})=> `${pageNumber} / ${totalPages}`} fixed/>
    </Page>
  </Document>
  )
}

export default PDFfile