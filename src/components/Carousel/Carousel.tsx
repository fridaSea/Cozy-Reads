import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import './Carousel.css'


type CarouselProps = {
  data: Array<Book>;
};

type ImageLinks = {
  thumbnail?: string,
};

type VolumeInfo = {
  title: string,
  imageLinks?: ImageLinks,
}

type Book = {
  volumeInfo: VolumeInfo;
}

function CarouselRatio({data}:CarouselProps) {
  

  return (
    <div className="carousel-container">
        <h2>Inspiration</h2>
        <Box className={"box-container"}
            sx={{
              scrollSnapType: 'x mandatory',
              '& > *': {
                scrollSnapAlign: 'center',
              },
              // '::-webkit-scrollbar': { display: 'none' },
            }}
        >
          {data.map((book: Book, index: number) => (
            <Card className="carousel-cards"  orientation="vertical" size="sm" key={index} variant="outlined">
              <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}  
                  alt={book.volumeInfo.title}
                  className="card-image"
                />
              </AspectRatio>
              <Box className="carousel-box"
              // sx={{ whiteSpace: 'wrap', mx: 1 }}
              >
                <Typography className="carousel-text" level="title-md">{book.volumeInfo.title}  </Typography>
              </Box>
            </Card>
          ))}
        </Box>
    </div>
    
  );
}

export default CarouselRatio