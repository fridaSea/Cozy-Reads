import React, { useEffect, useState } from 'react'
// import Fetch from '../../components/Fetch/Fetch'

interface Book{
        kind: string;
        id: string;
    //             "etag": "q0p8c+VxiFo",
    //     "selfLink": "https://www.googleapis.com/books/v1/volumes/xKRLEAAAQBAJ",
    //     "volumeInfo": {
    //         "title": "Du darfst nicht alles glauben, was du denkst",
    //         "subtitle": "Meine Depression",
    //         "authors": [
    //             "Kurt Krömer"
    //         ],
    //         "publisher": "Kiepenheuer & Witsch",
    //         "publishedDate": "2022-03-10",
    //         "description": "»Ich war dreißig Jahre depressiv. Ich muss damit leben. Und ich habe keinen Bock, das zu verheimlichen.« Kurt Krömer ist einer der beliebtesten und bekanntesten Komiker des Landes. In seiner Sendung »Chez Krömer« sprach er offen über seine schwere Depression und seine Zeit in der Tagesklinik und hat damit Millionen von Menschen erreicht. Alexander Bojcan ist 47 Jahre alt, trockener Alkoholiker, alleinerziehender Vater und er war jahrelang depressiv. Auf der Bühne und im Fernsehen spielt er Kurt Krömer. Er will sich nicht länger verstecken. »Du darfst nicht alles glauben, was Du denkst« ist der schonungslos offene und gleichzeitig lustige Lebensbericht eines Künstlers, von dem die Öffentlichkeit bisher nicht viel Privates wusste. Alexander Bojcan bricht ein Tabu und das tut er nicht um des Tabubrechens willen, sondern um Menschen zu helfen, die unter Depressionen leiden oder eine ähnliche jahrelange Ärzteodyssee hinter sich haben wie er selbst. Dieses Buch wirbt für einen offenen Umgang mit psychischen Krankheiten und ist gleichzeitig kein Leidensbericht, sondern eine komische und extrem liebenswerte Liebeserklärung an das Leben und die Kunst. Ein großes, ein großartiges Buch. »Und ab dafür«, würde Kurt Krömer sagen.",
    //         "industryIdentifiers": [
    //             {
    //                 "type": "ISBN_13",
    //                 "identifier": "9783462304145"
    //             },
    //             {
    //                 "type": "ISBN_10",
    //                 "identifier": "3462304143"
    //             }
    //         ],
    //         "readingModes": {
    //             "text": true,
    //             "image": true
    //         },
    //         "pageCount": 150,
    //         "printType": "BOOK",
    //         "categories": [
    //             "Fiction"
    //         ],
    //         "averageRating": 5,
    //         "ratingsCount": 2,
    //         "maturityRating": "NOT_MATURE",
    //         "allowAnonLogging": true,
    //         "contentVersion": "2.17.18.0.preview.3",
    //         "panelizationSummary": {
    //             "containsEpubBubbles": false,
    //             "containsImageBubbles": false
    //         },
    //         "imageLinks": {
    //             "smallThumbnail": "http://books.google.com/books/content?id=xKRLEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //             "thumbnail": "http://books.google.com/books/content?id=xKRLEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    //         },
    //         "language": "de",
    //         "previewLink": "http://books.google.de/books?id=xKRLEAAAQBAJ&printsec=frontcover&dq=a&hl=&cd=1&source=gbs_api",
    //         "infoLink": "https://play.google.com/store/books/details?id=xKRLEAAAQBAJ&source=gbs_api",
    //         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=xKRLEAAAQBAJ"
    //     },
    //     "saleInfo": {
    //         "country": "DE",
    //         "saleability": "FOR_SALE",
    //         "isEbook": true,
    //         "listPrice": {
    //             "amount": 9.99,
    //             "currencyCode": "EUR"
    //         },
    //         "retailPrice": {
    //             "amount": 9.99,
    //             "currencyCode": "EUR"
    //         },
    //         "buyLink": "https://play.google.com/store/books/details?id=xKRLEAAAQBAJ&rdid=book-xKRLEAAAQBAJ&rdot=1&source=gbs_api",
    //         "offers": [
    //             {
    //                 "finskyOfferType": 1,
    //                 "listPrice": {
    //                     "amountInMicros": 9990000,
    //                     "currencyCode": "EUR"
    //                 },
    //                 "retailPrice": {
    //                     "amountInMicros": 9990000,
    //                     "currencyCode": "EUR"
    //                 },
    //                 "giftable": true
    //             }
    //         ]
    //     },
    //     "accessInfo": {
    //         "country": "DE",
    //         "viewability": "PARTIAL",
    //         "embeddable": true,
    //         "publicDomain": false,
    //         "textToSpeechPermission": "ALLOWED",
    //         "epub": {
    //             "isAvailable": true,
    //             "acsTokenLink": "http://books.google.de/books/download/Du_darfst_nicht_alles_glauben_was_du_den-sample-epub.acsm?id=xKRLEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    //         },
    //         "pdf": {
    //             "isAvailable": true,
    //             "acsTokenLink": "http://books.google.de/books/download/Du_darfst_nicht_alles_glauben_was_du_den-sample-pdf.acsm?id=xKRLEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    //         },
    //         "webReaderLink": "http://play.google.com/books/reader?id=xKRLEAAAQBAJ&hl=&source=gbs_api",
    //         "accessViewStatus": "SAMPLE",
    //         "quoteSharingAllowed": false
    //     },
    //     "searchInfo": {
    //         "textSnippet": "Ein großes, ein großartiges Buch. »Und ab dafür«, würde Kurt Krömer sagen."
    //     }
    // }
}

function Home() {

    type items = string;
    const book = 'crime';
    const BooksURL : string = `https://www.googleapis.com/books/v1/volumes?q=${book}`
    const [data, setData] = useState<Array<Book>>([]);

useEffect(() => {
        fetch(BooksURL) 
        .then((response) => {
            //console.log("response:>>", response);
             return response.json();
         })
        .then((data: {items: Array<Book>} ) => {
            console.log("data:>>", data);
            // console.log("Title:>>", items.volumeInfo.title)
            setData(data.items);

            // setData(items.volumeInfo.title);
        })
        .catch((error) => {
            console.log("error:>>", error);
        })
}, [])
 
// !!!!!! ANWENDEN setDataCrimi(crimi.data.items);
// setDataDrama(drama.data.items) … !!!!!!!!!!!!!

// Filter anwenden
// let filteredData = [];
//     if (data) {
//         filteredData = data.filter((data)) =>
//             data.items.volumeInfo.title.toLowerCase().includes(filter.toLowerCase())
//     }
    
return (
    <>
    <h1>Books List</h1>
    <div className="cards-container">
        {data && data.length > 0 ? (
          data.map((book, index: number) => (
            <div className="card" key={index}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}  // Thumbnail-Bild des Buchcovers
                alt={book.volumeInfo.title}
                className="card-image"
              />
              <div className="card-body">
                <h2>{book.volumeInfo.title}</h2>
                <p>{book.volumeInfo.authors?.join(", ")}</p>
                <p>{book.volumeInfo.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Keine Bücher gefunden</p>
        )}
      </div>
    </>
)
}

// TRY__
// useEffect(() => {
//     fetch(BooksURL) 
//     .then(response => response.json())
//     .then (data => setData(data.items)
//         // console.log("data:>>", data)
// )
//     .catch((error) => console.log('Fetch error: ', error))
// }, [])

// return (
//     <>
//     <div>
// <h1>Moin</h1>

//     </div>
//     </>
// )
// ____ TRY ENDE 

//    const DataFetch = (){
        
//         fetch(url)
//         .then((response) => {
//             console.log("response:>>", response);
//              return response.json();
//          })
//         .then((data: object | Array ) => {
//             console.log("data:>>", data);
//             setData(data.items);
//         })
//         .catch((error) => {
//             console.log("error:>>", error);
//         })
        
//         DataFetch(url)

//         return (
//             <h1>Books to display
   
//             </h1>
//             )
    
//         }
        

export default Home
