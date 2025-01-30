import CarouselRatio from "../../components/Carousel/Carousel"
import FullWidthTextField from "../../components/Searchfield"
import Home from "../Home/Home"

function BookDetail() {
  
//   console.log(data.items)
  
    return (
        <>

        <div>
            <h1>Books Details</h1>
        </div>
        {/* <div>
        <h1>Welcome to Cozy Reads</h1>
        
          <p>Where stories feel like home.</p>
          <br />
          {user ? <p>Nice to have you here, {user?.userName}.</p> : " "}
          {user ? <p>What would you like to read today, {user?.userName}?</p> : " "}
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
        </div> */}
      </>
  )
}

export default BookDetail
