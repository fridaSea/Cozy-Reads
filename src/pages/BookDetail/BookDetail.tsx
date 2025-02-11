import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {Book} from "../Home/typesHome"

// Not neccessary, because when it is a string, typescript does know it
// type CrimeBook = string;
// type SelfBook = string;
// type items = string;


function BookDetail() {
  const { bookDetail } = useParams<{ bookDetail: string }>();
  console.log('bookDetail :>> ', bookDetail);

  const BooksURL: string = `https://www.googleapis.com/books/v1/volumes/${bookDetail}`;
  console.log('BooksURL :>> ', BooksURL);
// const [data, setData] = useState<Array<Book>>([]);
  const [data, setData] = useState<Book[]>([]);

  const [loading, setLoading] = useState(true); // Zustand für den Ladeprozess

// const {data} = useFetch<CrimeBook[]>(`https://www.googleapis.com/books/v1/volumes?q=crime`);
// console.log('data:>>',data)

useEffect(() => {
  // URL überprüfen
  console.log("Buch-Detail-URL:", BooksURL);

  fetch(BooksURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Buchdetails");
      }
      return response.json();
    })
    .then((data) => {
      console.log("API-Daten:", data);
      if (data.volumeInfo) {
        setData([data]);  // Hier setzen wir das Einzelbuch als Array
        setLoading(false); // Lade-Status auf false setzen, wenn Daten da sind
      } else {
        console.log("Keine Bücher gefunden");
        setLoading(false);
      }
    })
    .catch((error) => {
      console.log("Fehler beim Abrufen der Buchdetails:", error);
      setLoading(false); // Lade-Status bei Fehler auch auf false setzen
    });
}, [BooksURL]);

    return (
      <div>
       
        <h1>Book Details</h1>
    
        {loading ? (
      <p>Lade Buchdetails...</p>
    ) : data.length > 0 && data[0].volumeInfo ? (
      <div>
        <h2>Titel: {data[0].volumeInfo.title}</h2>
        <h3>Subtitel: {data[0].volumeInfo.subtitle}</h3>

        <img
          src={data[0].volumeInfo.imageLinks?.thumbnail}
          alt={data[0].volumeInfo.title}
          style={{ maxWidth: "200px" }}
        />
        
        <h3>Author(s):</h3>
        <p> {data[0].volumeInfo.authors?.join(", ")}</p>

        <h3>Description:</h3>
        <p>
        {data[0].volumeInfo.description}
        </p>
        <p>Verlag: {data[0].volumeInfo.publisher}</p>
        <p>Veröffentlicht: {data[0].volumeInfo.publishedDate}</p>
      </div>
    ) : (
      <p>Keine Details für dieses Buch verfügbar.</p>
    )}
      </div>
    );

      {/* <div className="Detailview" key={index}>
        
      
        <div>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img>  
        </div>

        <div>
         
          {/* Buy Link to google */}
        {/* </div>

        <div>
          <h3>
            Description:
          </h3>
          <p> "Fill in description"</p>
        </div>


      </div> */}
   
  };
      
export default BookDetail;