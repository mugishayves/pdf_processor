"use client"
import React, { useState, useEffect, useRef, } from 'react'
import Tab1 from './tabs/Tab1'
import Tab3 from './tabs/Tab3'
import Tab4 from './tabs/Tab4'
import Tab5 from './tabs/Tab5'
// import * as PDFJS from "pdfjs-dist/build/pdf";
// PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;

const App = () => {
        let renderedPdf;
        const pageRenderRef = useRef(null);
        const DEFAULT_SCALE = 1;
        const [progressTxt, setprogressTxt] = useState("");

        useEffect(() => {
                console.log("load PDF");
                getPDFData();
        });

        const getPDFData = async () => {
                // can be web URL
                const url = "file:///home/broony/Documents/notes/UNIT%202.%20SUMMARY(%20CITIZENSHIP)_2.pdf";
                downloadPDFFromURL(url);
        };

        const downloadPDFFromURL = (url: any) => {
                const xhrObj = new XMLHttpRequest();
                xhrObj.open("GET", url, true);
                xhrObj.responseType = "blob";

                xhrObj.addEventListener("loadstart", loadStartFunction, false);
                xhrObj.addEventListener("progress", progressFunction, false);
                xhrObj.addEventListener("error", downloadError, false);
                xhrObj.addEventListener("timeout", downloadTimeout, false);
                xhrObj.addEventListener("abort", downloadAbort, false);

                // xhrObj.onreadystatechange = async (event) => {
                //         try {
                //                 if (xhrObj && xhrObj.status === 400) {
                //                         console.log("download error");
                //                 } else {
                //                         if (xhrObj && xhrObj.readyState === XMLHttpRequest.DONE) {
                //                                 console.log("download complete");
                //                                 const pdfData = await convertBlobToBase64(xhrObj.response);
                //                                 loadPDFWithBlob(pdfData);
                //                         }
                //                 }
                //         } catch (error) {
                //                 console.error("File upload exception: ", error);
                //         }
                // };

                xhrObj.send(null);
        };

        const loadStartFunction = (event: any) => {
                console.log("File download started");
        };

        const progressFunction = async (event: any) => {
                if (event.lengthComputable) {
                        const progress = Math.round((event.loaded / event.total) * 100) + "%";
                        setprogressTxt(progress);
                }
        };

        const downloadError = () => {
                console.log("Network Error!");
        };

        const downloadTimeout = () => {
                console.log("Network Timeout!");
        };

        const downloadAbort = () => {
                console.log("Upload Aborted!");
        };

        // const loadPDFWithBlob = (pdfData: any) => {
        //         const encodedPDF = pdfData;
        //         const encodedData = encodedPDF.split(",");
        //         if (encodedData[1] !== undefined) {
        //                 const pdfbase64 = atob(encodedData[1]);
        //                 showPDFInCanvas(pdfbase64);
        //         }
        // };

        // const showPDFInCanvas = async (pdfData: any) => {
        //         const loadingTask = PDFJS.getDocument({ data: pdfData });
        //         loadingTask.promise.then(
        //                 (pdf: any) => {
        //                         renderedPdf = pdf;
        //                         const container = pageRenderRef.current;
        //                         const pageNo = 0;
        //                         fetchPageNo(pageNo, renderedPdf, container);
        //                 },
        //                 (error: any) => {
        //                         console.log("PDF error");
        //                 }
        //         );
        // };

        // const fetchPageNo = (pageNo: any, pdf: any, container: any) => {
        //         if (pageNo < pdf._pdfInfo.numPages) {
        //                 pageNo += 1;
        //                 createContextForCanvas(pdf, container, pageNo).then((page: any) => {
        //                         fetchPageNo(page + 1, pdf, container);
        //                 });
        //         }
        // };

        // const createContextForCanvas = (pdf: any, container: any, pageNo: any) => {
        //         return new Promise((resolve) => {
        //                 pdf.getPage(pageNo).then(async (page: any) => {
        //                         const viewport = page.getViewport({ scale: DEFAULT_SCALE });

        //                         let canvasInHTML = {
        //                                 canvas: undefined,
        //                                 ctx: undefined
        //                         };

        //                         const li = document.createElement("div");
        //                         li.setAttribute("id", "page-" + (page._pageIndex + 1));
        //                         li.setAttribute("style", "position: relative;");

        //                         canvasInHTML.canvas = document.createElement("canvas");
        //                         canvasInHTML.ctx = canvasInHTML.canvas.getContext("2d");
        //                         canvasInHTML.canvas.height = viewport.height;
        //                         canvasInHTML.canvas.width = viewport.width;

        //                         li.appendChild(canvasInHTML.canvas);
        //                         container.appendChild(li);

        //                         const renderContext = {
        //                                 canvasContext: canvasInHTML.ctx,
        //                                 viewport
        //                         };

        //                         let renderTask = page.render(renderContext);

        //                         renderTask.promise.then(() => {
        //                                 if (pageNo !== null) {
        //                                         resolve(pageNo);
        //                                 }
        //                         });

        //                         if (pageRenderRef.current) {
        //                                 pageRenderRef.current = li;
        //                         }
        //                 });
        //         });
        // };

        // const convertBlobToBase64 = (data: any) => {
        //         return new Promise((resolve, reject) => {
        //                 let fileReader = new FileReader();
        //                 data = new Blob([data], { type: "application/pdf" });
        //                 fileReader.onload = (evt) => {
        //                         const result = fileReader.result;
        //                         try {
        //                                 fileReader = null; // clear file reader
        //                                 resolve(result);
        //                         } catch (e) {
        //                                 fileReader = null; // clear file reader
        //                                 reject(e);
        //                         }
        //                 };
        //                 fileReader.readAsDataURL(data);
        //         });
        // };
        const Tab2 = () => {

                return (
                        <div className='w-full h-full'>
                                <div className="flex h-full w-full">
                                        <div className="w-[20%] h-full p-2 flex flex-col items-center gap-5 overflow-auto">
                                                <div className='w-full flex flex-col items-center gap-3'>
                                                        <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>

                                                        </div>
                                                        <p>Page 1</p>
                                                </div>
                                                <div className='w-full flex flex-col items-center gap-3'>
                                                        <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>

                                                        </div>
                                                        <p>Page 2</p>
                                                </div>
                                                <div className='w-full flex flex-col items-center gap-3'>
                                                        <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>

                                                        </div>
                                                        <p>Page 3</p>
                                                </div>
                                                <div className='w-full flex flex-col items-center gap-3'>
                                                        <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>

                                                        </div>
                                                        <p>Page 4</p>
                                                </div>
                                        </div>

                                        <div className="h-full w-[50%] border-4 flex-grow flex items-center justify-center flex-col text-center gap-5" ref={pageRenderRef}>
                                                <h1 className='text-[2rem] font-bold'>This is the PDF</h1>

                                                <div>
                                                        <h1 className='font-bold mb-5 text-[1.2rem]'>Author</h1>
                                                        <p className='p-2 border-dashed border-2'> Andrew</p>
                                                </div>
                                                <div>
                                                        <h1 className='font-bold mb-5 text-[1.2rem]'>ISBN</h1>
                                                        <p className='p-2 border-dashed border-2'> 123456789</p>
                                                </div>
                                        </div>

                                        <div className=" h-full w-[20%] flex flex-col overflow-auto p-4 gap-5">
                                                <div className='w-full p-2 rounded-md border-2 border-black text-center gap-4 overflow-auto'>
                                                        <h1>Author name</h1>
                                                </div>
                                                <div className='w-full p-2 rounded-md border-2 border-black text-center'>
                                                        <h1>ISBN</h1>
                                                </div>
                                                <div className='w-full p-2 rounded-md border-2 border-black text-center'>
                                                        <h1>Publish Date</h1>
                                                </div>
                                                <div className='w-full p-2 rounded-md border-2 border-black text-center'>
                                                        <h1>...</h1>
                                                </div>
                                        </div>
                                </div>
                        </div>
                )
        }
        const tabs = [Tab1, Tab2, Tab3, Tab4, Tab5]
        const [activeTab, setActiveTab] = useState(0)
        return (
                <div className='w-full h-full overflow-hidden bg-gray-100'>
                        <div className="flex flex-col h-full">
                                <div className="h-[80px] border-b-blue-500 border-b-2">
                                        <div className="w-full h-full flex items-center justify-center gap-10">
                                                <div
                                                        onClick={() => setActiveTab(0)}
                                                        className="flex-col flex items-center p-4">
                                                        <div className={`w-[40px] h-[40px] p-2 ${activeTab >= 0 ? 'bg-blue-500 ' : 'bg-neutral-300'} flex justify-center items-center rounded-full font-bold text-white cursor-pointer`}>1</div>
                                                        <p>Upload pdf</p>
                                                </div>
                                                <div
                                                        onClick={() => setActiveTab(1)}
                                                        className="flex-col flex items-center">
                                                        <div className={`w-[40px] h-[40px] p-2 ${activeTab >= 1 ? 'bg-blue-500 ' : 'bg-neutral-300'} flex justify-center items-center  rounded-full font-bold text-white cursor-pointer`}>2</div>
                                                        <p>Extract</p>
                                                </div>
                                                <div
                                                        onClick={() => setActiveTab(2)}
                                                        className="flex-col flex items-center">
                                                        <div className={`w-[40px] h-[40px] p-2 ${activeTab >= 2 ? 'bg-blue-500 ' : 'bg-neutral-300'} flex justify-center items-center rounded-full font-bold text-white cursor-pointer`}>3</div>
                                                        <p>Chop-off</p>
                                                </div>
                                                <div
                                                        onClick={() => setActiveTab(3)}
                                                        className="flex-col flex items-center">
                                                        <div className={`w-[40px] h-[40px] p-2 ${activeTab >= 3 ? 'bg-blue-500 ' : 'bg-neutral-300'} flex justify-center items-center rounded-full font-bold text-white cursor-pointer`}>4</div>
                                                        <p>Processing</p>
                                                </div>
                                                <div
                                                        onClick={() => setActiveTab(4)}
                                                        className="flex-col flex items-center">
                                                        <div className={`w-[40px] h-[40px] p-2 ${activeTab >= 4 ? 'bg-blue-500 ' : 'bg-neutral-300'} flex justify-center items-center rounded-full font-bold text-white cursor-pointer`}>5</div>
                                                        <p>Outcome</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="h-full ">
                                        {tabs[activeTab]()}
                                </div>
                                {
                                        activeTab !== tabs.length - 1 && (
                                                <div className="h-[50px]  absolute bottom-0 w-full">
                                                        <div className="flex flex-row justify-between items-center px-4 py-1">
                                                                <div></div>
                                                                <button onClick={() => setActiveTab(activeTab + 1)} className='px-4 py-2 rounded-md bg-blue-500 text-white'>Next</button>
                                                        </div>
                                                </div>
                                        )
                                }
                        </div>
                </div>
        )
}

export default App