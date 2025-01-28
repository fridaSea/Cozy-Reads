import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { Book } from "./typesHome";
import CarouselRatio from "../../components/Carousel/Carousel";
import FullWidthTextField from "../../components/Searchfield";
// import Fetch from '../../components/Fetch/Fetch'
import "./Home.css";

type items = string;

function Home() {
  console.log("Home rendered");
  const book = "crime";
  // self, computers / webdevelopment , Biography & Autobiography
  // Filtervorgaben: Categorie, Sprache, weniger/ mehr als 200 Seiten, (Published by year), publisher

  // statt "description" untern, könnte ich auch nutzen: aus der API. "searchInfo": {"textSnippet"  ... und die description in die Details Page packen

  const BooksURL: string = `https://www.googleapis.com/books/v1/volumes?q=${book}`;

  const [data, setData] = useState<Array<Book>>([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Array<Book>>([]);

  // const [filterValue, setFilterValue] = useState(""); // Filter für die Suche verwalten

  // Fetch Data
  useEffect(() => {
    fetch(BooksURL)
      .then((response) => {
        //console.log("response:>>", response);
        return response.json();
      })
      .then((data: { items: Array<Book> }) => {
        console.log("data:>>", data);
        // console.log("Title:>>", items.volumeInfo.title)
        setData(data.items); //Setzt die rohen Daten
        // setFilteredBooks(data.items);  // Anfangs zeigt man alle Bücher an ????? WARUM WIRD DAS HIER MIT REIN GEGEBEN???

        // setData(items.volumeInfo.title);
      })
      .catch((error) => {
        console.log("error:>>", error);
      });
  }, []);

  // // Filter / Search

  const handleInputChange = (e: FormEvent<HTMLDivElement>) => {
    console.log("asdasdasdasd");
    const target = e.target as HTMLInputElement;
    const searchTerm = target.value;
    console.log("searchTerm :>> ", searchTerm);
    setSearchItem(searchTerm);
  };

  const filteredItems = data.filter((myBook) => {
    if (myBook.volumeInfo.authors && myBook.volumeInfo.authors.length > 0) {
      console.log("searchItem", searchItem);

      return myBook.volumeInfo.authors[0]
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    } else {
      console.log("else case");
    }
    // console.log('myBook :>> ', myBook)
  });
  // setFilteredBooks(filteredItems);

  // ALT ALT ALT ALT
  // let author = book.volumeInfo.authors.toString()

  //  console.log(authors);

  // const filteredBooks = useMemo (() => {
  //     return data.filter(book => author.toLowerCase().includes(filterValue.toLowerCase() ));
  //   }, [data, filterValue])

  // const handleFilterChange = (e, filterValue) => {
  //   setFilterValue(e.target.value);
  // };

  // let filteredBooks = [];
  //   if (data) {
  //     filteredBooks = data.filter((data) =>
  //         book.volumeInfo.authors.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }

  // !!!!!! ANWENDEN setDataCrimi(crimi.data.items);
  // setDataDrama(drama.data.items) … !!!!!!!!!!!!!

  // Filter anwenden
  // let filteredData = [];
  //     if (data) {
  //         filteredData = data.filter((data)) =>
  //             data.items.volumeInfo.title.toLowerCase().includes(filter.toLowerCase())
  //     }
console.log("userAgent", navigator.userAgent)
  return (
    <>
      <div>
        <h1>Welcome to Cozy Reads</h1>
        <p>Where stories feel like home.</p>
        <div>
          {" "}
          {navigator.userAgent.includes("Pixel") &&<CarouselRatio data={data} /> }
          {" "}
        </div>
      </div>

      <h1>Books List</h1>
      <div className="cards-container">
        <FullWidthTextField handleInputChange={handleInputChange} />

        {data && filteredItems.length > 0 ? (
          filteredItems.map((book, index: number) => (
            <div className="card" key={index}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail} // Thumbnail-Bild des Buchcovers
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
  );
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

export default Home;
