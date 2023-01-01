/* eslint-disable camelcase */
import React, {useState} from 'react';
import '../App.css'
import { Icon } from '@iconify/react'
// React Router
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const example_files = [
    { "filename": "C++ for Nerds", "language": "cpp", "file_size": "33.37", "last_edited": "1st January, 2023", "file_id": "1f1e33" },
    { "filename": "JavaScript Tutorial", "language": "js", "file_size": "33.32", "last_edited": "1st January, 2023", "file_id": "933676" },
    { "filename": "Scraping Script", "language": "py", "file_size": "33.32", "last_edited": "1st January, 2023", "file_id": "933676" },
    { "filename": "Who use this kid?", "language": "cs", "file_size": "33.32", "last_edited": "1st January, 2023", "file_id": "933676" }
]

const lang_icon =
{
    cpp: "mdi:language-cpp",
    cs: "mdi:language-csharp",
    go: "fa6-brands:golang",
    java: "mdi:language-java",
    js: "mdi:language-javascript",
    py: "mdi:language-python"
}

function deleteFile() {
    toast("File Successfully Deleted;-;")
}

export default function Dashboard() {
    const [currentFile, setCurrentFile] = useState([]);
    const DeleteConfirmationDialog = (file_id) => {
        toast("fml")
    }
    return (
        <div className='p-8 w-screen h-full font-sans'>
            <ToastContainer theme="dark" />
            {/* Start of Delete Confirmation Dialog */}
            <input type="checkbox" id="delete-confirmation-check" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Delete File</h3>
                    <p class="py-4">Are you sure you want to delete this file? <strong>THIS ACTION IS IRREVERSIBLE!</strong></p>
                    <div class="modal-action">
                        <label htmlFor="delete-confirmation-check" class="btn">No</label>
                        <label htmlFor="delete-confirmation-check" class="btn btn-error" onClick={deleteFile}>Yes</label>
                    </div>
                </div>
            </div>
            {/* End of dialog */}
            <div className='flex flex-row py-4 items-center justify-center'>
                <h1 className='text-4xl font-bold'>All Files</h1>
                <a className="btn btn-ghost normal-case text-2xl">
                    <Icon icon="material-symbols:refresh" />
                </a>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 justify-center'>
                {example_files.map((item) => (
                    <div className="card flex-1 bg-base-200 shadow-xl leading-6">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                                <Icon icon={lang_icon[`${item.language}`]} className='inline' />
                                {item.filename}
                            </h2>
                            <p>Last Edited: {item.last_edited} | {item.file_size} kB</p>
                            <div className="card-actions justify-end text-xl items-center">
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <label tabIndex={0} className="btn m-1 gap-x-2 text-xl">
                                        <Icon icon="material-symbols:more-horiz" />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52">
                                        <li>
                                            <div className='text-xl'>
                                                <Icon icon="material-symbols:download-rounded" />
                                                <a>Download</a>
                                            </div>
                                        </li>
                                        <li>
                                            <label className='text-xl text-error active:bg-red-300' onClick={()=>DeleteConfirmationDialog(item.filename)} htmlFor="delete-confirmation-check" >
                                                <Icon icon="material-symbols:delete" />
                                                <a className='text-error' >Delete</a>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <button className="btn btn-primary gap-x-2 text-xl font-bold">
                                    <Icon icon="material-symbols:edit-document-outline" className='inline' />
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}