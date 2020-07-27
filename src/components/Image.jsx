import React, { useState, useEffect, useRef } from 'react';
import "./image.css";
import uploadLogoImage from "../actions/actions";
function Image(props) {

    // useEffect(() => {
    //     let filteredArray = selectedFiles.reduce((file, current) => {
    //         const x = file.find(item => item.name === current.name);
    //         if (!x) {
    //             return file.concat([current]);
    //         } else {
    //             return file;
    //         }
    //     }, []);
    //     setValidFiles([...filteredArray]);

    // }, [selectedFiles]);

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
        if (files.length) {
            handleFiles(files);
        }
    }
    const handleFiles = (files) => {
                console.log("validating file", files);
                let formData = new FormData();
                formData.append("files",files);
                let response = [
                    {
                    name: "103900.png",
                    img: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAH0AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL"
                    ,score: 56
                },
                
                {
                    name: "103900.png",
                    img: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAH0AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL"
                    ,score: 56
                }]
                // uploadLogoImage(formData).then(res=>{
                //     console.log(res);
                // setSelectedFiles(prevArray => [...prevArray, ...response]);
                // }).catch(err=>{
                //     console.log(err);
                // });
                
                setSelectedFiles(prevArray => [...prevArray, ...response]);
            
        
    }
   
    const fileInputClicked = () => {
        fileInputRef.current.click();
    }
    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }
    

    // const openImageModal = (file) => {
    //     const reader = new FileReader();
    //     modalRef.current.style.display = "block";
    //     reader.readAsDataURL(file);
    //     reader.onload = (e)=> {modalImageRef.current.style.backgroundImage = `url(${e.target.result})`}
    // }
    // const closeModal = () => {
    //     modalRef.current.style.display = "none";
    //     modalImageRef.current.style.backgroundImage = 'none';
    // }

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [unsupportedFiles, setUnsupportedFiles] = useState([]);
    const fileInputRef = useRef();
    // const modalImageRef = useRef();
    // const modalRef = useRef();
    // const [validFiles, setValidFiles] = useState([]); for duilcate file check
    
    return (
        <div className="container" onClick={fileInputClicked}>
            
            <div className="drop-container"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
                <div className="drop-message">
                    <div className="upload-icon"></div>
                    Drag & Drop files here or click to upload
                    </div>
            </div>
            <form></form>
            <input ref={fileInputRef} className="file-input" type="file"  onChange={filesSelected} />
            <div className="file-display-container">
                {console.log(selectedFiles[1])}
                {
                    
                    selectedFiles.map(function(data, i){
                        // {image = URL.createObjectURL(data.img)}
                        return <div className="file-status-bar" key={i}>
                            {/* {console.log(data)} */}
                            {/* <div onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}> */}
                            <div>
                                
                                <div className="file-type">{data.name}</div>
                                <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt='Logo' width="300" height="300" />
                            </div>
                            {/* <div className="file-remove" onClick={() => removeFile(data.name)}>X</div> */}
                        </div>
                    })
                }
            </div>


        </div>

    );
}

export default Image;