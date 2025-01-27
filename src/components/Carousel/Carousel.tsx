import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import './Carousel.css'
import {book} from '../../pages/Home/typesHome'
import data from '../../pages/Home/Home' 

// function Carousel() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Carousel


// const data = [
//   {
//     src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
//     title: 'Night view',
//     description: '4.21M views',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
//     title: 'Lake view',
//     description: '4.74M views',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
//     title: 'Mountain view',
//     description: '3.98M views',
//   },
// ];

type CarouselProps = {
  data: Array<Book>;
};

function CarouselRatio({data}:CarouselProps) {
  
  type volumeInfo = {}


  return (
    <div>
        <h2>Crime</h2>
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                py: 1,
                overflow: 'auto',
                width: 343,
                scrollSnapType: 
                    'x mandatory',
                    '& > *': {
                    scrollSnapAlign: 'center',
                     },
                '::-webkit-scrollbar': { display: 'none' },
            }}
    >
      {data.map((book: {}, index: number) => (
        <Card className="CarouselCards"  orientation="horizontal" size="sm" key={index} variant="outlined" sx={{ maxWidth:'85%', backgroundColor:'transparent'}}>
          <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
            <img
               src={book.volumeInfo.imageLinks?.thumbnail}  // Thumbnail-Bild des Buchcovers
               alt={book.volumeInfo.title}
               className="card-image"
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'wrap', mx: 1 }}>
            <Typography level="title-md">{book.volumeInfo.title}  </Typography>
            {/* <Typography level="body-sm">{book.volumeInfo.description}</Typography> */}
          </Box>
        </Card>
      ))}
    </Box>
    </div>
    
  );
}

export default CarouselRatio