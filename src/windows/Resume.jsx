
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import {Download} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import {Document, Page, pdfjs} from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

const Resume = () => {
    const pageRef = useRef(null);
    const [pageWidth, setPageWidth] = useState(0);
    const [pdfError, setPdfError] = useState(false);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        const observer = new ResizeObserver(([entry]) => {
            setPageWidth(Math.floor(entry.contentRect.width));
        });

        observer.observe(page);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="resume-window">
            <div id="window-header" className="resume-header">
                <WindowControls target="resume"/>
                <h2>Resume.pdf</h2>

                <a href="/files/Resume.pdf" download className="resume-download" title="Download Resume" aria-label="Download Resume">
                    <Download className="icon"/>
                </a>
            </div>
            <div className="resume-viewer">
                <div className="resume-page" ref={pageRef}>
                    {pdfError ? (
                        <div className="resume-error" role="alert">
                            <p>Resume preview could not be loaded.</p>
                            <a href="/files/Resume.pdf" target="_blank" rel="noreferrer">Open the PDF</a>
                        </div>
                    ) : (
                        <Document
                            file="/files/Resume.pdf"
                            onLoadError={() => setPdfError(true)}
                            onSourceError={() => setPdfError(true)}
                            loading={<p className="resume-status">Loading resume…</p>}
                        >
                            <Page
                                pageNumber={1}
                                width={pageWidth || undefined}
                                renderTextLayer
                                renderAnnotationLayer
                            />
                        </Document>
                    )}
                </div>
            </div>
        </div>

    )
}
const ResumeWindow = WindowWrapper(Resume,'resume');
export default ResumeWindow;
