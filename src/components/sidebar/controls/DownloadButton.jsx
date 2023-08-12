import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './DownloadButton.css';

function DownloadButton({ previewRef }) {
  const downloadPdf = async () => {
    const dataUrl = await htmlToImage.toPng(previewRef.current, {
      pixelRatio: 2,
      quality: 1,
    });
    const pdf = new jsPDF();

    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);

    pdf.save('cv.pdf');
  };

  return (
    <button className="btn controls__download-btn" onClick={downloadPdf}>
      <FontAwesomeIcon icon={faFilePdf} />
      <span>Download Resume</span>
    </button>
  );
}

export default DownloadButton;
