import React, { useEffect, useState } from 'react';

export default function Home() {

    const [filedownloadlink, setFiledownloadlink] = useState("")

    useEffect(() => {
        var contacts = [{
            name: 'Bob',
            lastname: 'Smith'
        }, {
            name: 'James',
            lastname: 'David'
        }, {
            name: 'Robert',
            lastname: 'Miller'
        }, {
            name: 'David',
            lastname: 'Martin'
        }];

        var myURL = window.URL || window.webkitURL //window.webkitURL works in Chrome and window.URL works in Firefox
        var csv = JSON.stringify(contacts);
        var blob = new Blob([csv], { type: 'text/csv' });
        var csvUrl = myURL.createObjectURL(blob);
        setFiledownloadlink(csvUrl);
    }, []);

    function onDownloadButtonClick() {
        console.log("DOWNLOAD BLOB")
        var data = new Blob(['res'], { type: 'text/csv' });
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
            <button onClick={onDownloadButtonClick}>DOWNLOAD BLOB</button>
            <p>ASDASDAS</p>
            <a download="next.svg" href={'/next.svg'}>Download1</a>
            <p>ASDASDAS</p>
            <a download="test.txt" href={filedownloadlink}>Download2</a>
        </section>
    )
}
