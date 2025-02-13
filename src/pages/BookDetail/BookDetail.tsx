import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {Book} from "../Home/typesHome";
import "./BookDetail.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import "../../index.css"

// Not neccessary, because when it is a string, typescript does know it
// type CrimeBook = string;
// type SelfBook = string;
// type items = string;

// Funktion zum Entfernen von HTML-Tags
function removeHtmlTags(str: string) {
  return str.replace(/<[^>]*>/g, ""); // Alle HTML-Tags entfernen
}

// const ArrowBackIcon = () => {
//   let navigate = useNavigate();
//     return 
// }



function BookDetail() {
  const navigate = useNavigate();
  
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

    // EXTRA <p> ELIMINIEREN TO DO 
    // const dataUrlHash = document.location.hash;
    // // console.log("dataUrlHash:>>", dataUrlHash)
    // const dataHash = decodeURI(dataUrlHash);
    // // console.log("dataHash:>>", dataHash)
    // const dataBook = dataHash.substring(1);
    // console.log("dataBook:>>", dataBook)

  //  const dataUrlHash = data.replace(/<(.|\n)*?>/g, '');
  //   setData(data);

  // const descriptionUrlHash = document.location.hash;
  // const descriptionHash = decodeURI(descriptionUrlHash);
  // const description = descriptionHash.substring(1)
  // console.log("description:>>",description)


    return (
       
      <div>
        <button className="backButton" onClick={() => navigate(-1)}> <ArrowBackRoundedIcon/> </button>

        {/* <h1>Book Details</h1>
     */}
        {loading ? (
      <p>Lade Buchdetails...</p>
    ) : data.length > 0 && data[0].volumeInfo ? (
      <div className="topInformation">
        <div >
        {/* Titel */}
        <h2>{data[0].volumeInfo.title}</h2>
        {/* Subtitel */}
        <h3>{data[0].volumeInfo.subtitle}</h3>
 
        <img
          src={data[0].volumeInfo.imageLinks?.thumbnail}
          alt={data[0].volumeInfo.title}
          className="bookImage"
        />
        
        <h4>Author(s):</h4>
        <p> {data[0].volumeInfo.authors?.join(", ")}</p>

        <p className="titels">Verlag: </p>
        <p>{data[0].volumeInfo.publisher}</p>
        
        </div>

        <hr></hr>
        <div className="descriptionText">
        <h3>Description:</h3>
        <p>
          {/* {description} */}
        {data[0].volumeInfo.description ? removeHtmlTags(data[0].volumeInfo.description): "Keine Beschreibung verfügbar."}
        </p>
        </div>
        
        <hr></hr>
        <div className="bottomInfos">
          <div>
            <p className="titels">Veröffentlicht: </p>
            <p>{data[0].volumeInfo.publishedDate}</p>
          </div>
          <div>
            <p className="titels">Pages: </p>
            <p>{data[0].volumeInfo.pageCount}</p>
          </div>
        </div>
      </div>
    ) : (
      <p>Keine Details für dieses Buch verfügbar.</p>
    )}
    <hr></hr>
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