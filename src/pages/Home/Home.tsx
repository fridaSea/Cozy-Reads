import { FormEvent, useEffect, useState } from "react";
import { Book } from "./typesHome";
import CarouselRatio from "../../components/Carousel/Carousel";
import FullWidthTextField from "../../components/Searchfield";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardMedia} from "@mui/material";
import Grid from '@mui/material/Grid';
import { Link } from "react-router";
import Typography from '@mui/material/Typography';

import "./Home.css";
import "../../App.css";

// type items = string;

// Funktion zum Entfernen von HTML-Tags
// function removeHtmlTags(str: string) {
//   return str.replace(/<[^>]*>/g, ""); // Alle HTML-Tags entfernen
// }

// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     h5: true; // oder den Typ der gewünschten Variante anpassen
//   }
// }


function Home() {
  // console.log("Home rendered");
  
  // const Api_Key = import.meta.env.REACT_APP_API_KEY;
  // const Api_Key = process.env.REACT_APP_API_KEY;
  // console.log(Api_Key);

  const book = "nature";
  // self, computers / webdevelopment , Biography & Autobiography
  // Filtervorgaben: Categorie, Sprache, weniger/ mehr als 200 Seiten, (Published by year), publisher

  // statt "description" untern, könnte ich auch nutzen: aus der API. "searchInfo": {"textSnippet"  ... und die description in die Details Page packen

  const BooksURL: string = `https://www.googleapis.com/books/v1/volumes?q=${book}`;
  // const BooksURL: string = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${Api_Key}`;

  const [data, setData] = useState<Array<Book>>([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Array<Book>>([]);

  // const { user } = useContext(AuthContext);

  // const [filterValue, setFilterValue] = useState(""); // Filter für die Suche verwalten

  // Fetch Data
  useEffect(() => {
    fetch(BooksURL)
      .then((response) => {
        //console.log("response:>>", response);
        return response.json();
      })
      .then((data: { items: Array<Book> }) => {
        // console.log("data:>>", data);  -> GERNE WIEDER AKTIVIEREN ZUM WEITERARBEITEN TO DO 
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
    // console.log("asdasdasdasd");
    const target = e.target as HTMLInputElement;
    const searchTerm = target.value;
    // console.log("searchTerm :>> ", searchTerm);
    setSearchItem(searchTerm);
  };

  const filteredItems = data.filter((myBook) => {
    if (myBook.volumeInfo.authors && myBook.volumeInfo.authors.length > 0) {
      // console.log("searchItem", searchItem);

      return myBook.volumeInfo.authors[0]
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    } else {
      console.log("else case");
    }
    // console.log('myBook :>> ', myBook)
  });
  // setFilteredBooks(filteredItems);

  
  return (
    <>
      <div>
        <h1>Welcome to Cozy Reads</h1>

        <p>Where stories feel like home.</p>
        <br />
        {/* {user ? <p>Nice to have you here, {user?.userName}.</p> : " "}
        {user ? (
          <p>What would you like to read today, {user?.userName}?</p>
        ) : (
          " "
        )} */}
        <div>
          {" "}
          {navigator.userAgent.includes("Pixel") && (
            <CarouselRatio data={data} />
          )}{" "}
        </div>
      </div>

      <h1>All about "Nature" </h1>
      
  
      <div className="cards-container">
        <FullWidthTextField handleInputChange={handleInputChange} />

        {filteredItems.length === 0 && filteredBooks.length > 0 ? (
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "#e4a788", textAlign: "center", marginTop: "20px" }}
          >
            No results found for "{searchItem}"
          </Typography>
        ) : (
          <Box>
            <Grid container spacing={2}>

              {
              // data && 
              filteredItems.length > 0 ? (
                filteredItems.map((book, index: number) => (
                  <Grid item xs={12} md={4} lg={3} className="grid-container" key={index}>
                      <Link to={`/books/${book.id}`}>
                  
                      <Card
                      className="card"
                      variant="outlined"
                      >
                        <CardMedia
                          component="img"
                          image={book.volumeInfo.imageLinks?.thumbnail}
                          alt={book.volumeInfo.title}
                        />

                        <CardContent sx={{ flexGrow: 1, height:'100%'}}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            // className="clamped"
                            // sx={{
                            //   whiteSpace: "nowrap",
                            //   overflow: "hidden",
                            //   textOverflow: "ellipsis",
                            //   display: "block",
                            //   lineClamp:"4",
                            // }}
                          >

                            <h4> {book.volumeInfo.title} </h4>
                            <p className="subtitle">{book.volumeInfo.subtitle}</p>
                            <p className="authors">From: {book.volumeInfo.authors?.join(", ")}</p>
                            
                          </Typography>
                        </CardContent>

                        <div>
                          <button className="read-more-button">
                          <Link to={`/books/${book.id}`} key={index}>
                            Read more</Link>
                          </button>
                        </div>
                      </Card>
                      </Link>
                  </Grid>
                ))
              ) : (
                <div>
                <br></br>
                <p className="no-books-found"> No Book found</p>
                </div>
              )}
          </Grid>
          </Box>
        )} 
      </div>
    </>
  )
}

export default Home;
