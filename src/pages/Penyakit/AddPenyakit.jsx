import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';
import PDFfile from '../../components/PDFfile';

const AddPenyakit = () => {
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
    <div>
      <PDFfile/>
      <br />
      <PDFDownloadLink document={<PDFfile/>} fileName="FORM">
        {({loading})=>(loading ? <button>Loading document...</button> : <button>Download</button>)}
      </PDFDownloadLink>
    </div>
  )
}

export default AddPenyakit