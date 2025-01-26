import React, { useEffect, useState } from 'react'
import { Book } from './typesHome'
import CarouselRatio from '../../components/Carousel/Carousel'
// import Fetch from '../../components/Fetch/Fetch'




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
    <div>
      <h1>Welcome to Cozy Reads</h1>
      <p>Where stories feel like home.</p>
        <div> <CarouselRatio data={data}/> </div>
    </div>
    
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
          <p>No Books found</p>
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


export default Home
