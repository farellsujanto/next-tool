import React from 'react';

export default function Home() {

    function onDownloadButtonClick() {
        console.log("DOWNLOAD BLOB")
        var data = new Blob(['res'], {type: 'text/csv'});
        console.log(data)
        var csvURL = window.URL.createObjectURL(data);
        console.log(csvURL)
        var tempLink = document.createElement('a');
        console.log(tempLink)
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'filename.png');
        tempLink.click();
    }

    return (
        <section>
            <button onClick={onDownloadButtonClick}>DOWNLOAD</button>
            <p>ASDASDAS</p>
        </section>
    )
}
