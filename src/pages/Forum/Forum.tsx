import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, TextField, Typography } from "@mui/material"
import { Form } from "react-router"
import SendIcon from '@mui/icons-material/Send';
import { Email } from "@mui/icons-material";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../configuration/firebaseConfig";
import { useEffect, useState } from "react";

type MessageType = {
    author: string;
    text: string;
    date: Timestamp;
    id: string;
}

function Forum() {

    const [messages, setMessages] = useState<MessageType[] | null >(null)



    const getMessages = async () => {
        const querySnapshot = await getDocs(collection(db, "forum"));
        const messagesArray:MessageType[] = []
        querySnapshot.forEach((doc) => {
            console.log('doc:>>', doc)
          console.log(`${doc.id} => ${doc.data().text}`);
          const message: MessageType = {
            text: doc.data().text,
            date: doc.data().date,
            athor: doc.data().author,
            id: doc.id
          }
          
          messagesArray.push(message);
          setMessages(messagesArray)
        });
        console.log('messagesArray:>>' , messagesArray);
    }

    // Format the Date
    const formatDate = (seconds:number) => {
      const formatedDate = new Date(seconds * 1000).toLocaleString()
      return formatedDate;
    }

    useEffect(() => {
      getMessages()
    }, [])
    


  return (
    <div>
      <h1>
        This is your Place to connect - THE FORUM
      </h1>
      <Stack gap={3} className="align-items-center">
      
        {messages && messages.map( (message) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={message.id}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {message.author}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                    {formatDate(message.date.seconds)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {message.text}
                </Typography>
                </CardContent>
            </Card>
          )
        })}

        <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
            id="outlined-multiline-flexible"
            label="Your Text"
            multiline
            maxRows={4}
            variant="outlined"
            />
            
        </div>
        </Box>
        <Button type="submit" variant="outlined">
        Send
        </Button>
      </Stack>
    </div>
  )
}

export default Forum
