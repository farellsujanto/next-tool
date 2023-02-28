import React from 'react';

export default function Home() {

    function onDownloadButtonClick() {
        var data = new Blob(['res'], {type: 'text/csv'});
        var csvURL = window.URL.createObjectURL(data);
        var tempLink = document.createElement('a');
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
