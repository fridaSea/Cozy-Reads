import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, TextField, Typography } from "@mui/material"
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../configuration/firebaseConfig";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

type MessageType = {
    author: string;
    text: string;
    date: Timestamp;
    id: string;
}

function Forum() {
    const{user} = useContext(AuthContext)

    const [messages, setMessages] = useState<MessageType[] | null >(null)
    const [messageText, setMessageText] = useState<string>("");

    const getMessages = async () => {
        const querySnapshot = await getDocs(collection(db, "forum"));
        const messagesArray:MessageType[] = [];
        querySnapshot.forEach((doc) => {
            console.log('doc:>>', doc)
          console.log(`${doc.id} => ${doc.data().text}`);
          const message: MessageType = {
            text: doc.data().text,
            date: doc.data().date,
            author: doc.data().author,
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

    //RAUL:  e: ChangeEvent<HTMLTextAreaElement>
    // Write the message
    const handleMessageTextChange = (e:ChangeEvent<HTMLInputElement>) => {
      console.log('e.target.value :>>' , e.target.value);
      setMessageText(e.target.value);
    }

    // Submit the message 
    const handleMessageSubmit = async (e:FormEvent<HTMLFormElement>) => {
        // the default behaviour of a form is always to refresh the page. O prevent that with the following: 
        e.preventDefault()
        // if you try to send a message and you are not logged in you will get a warning here - TO DO: BUILD AN APPROPIATE ERROR MESSAGE TO SHOW TO THE USER 
        // this is just double checking becuase it is a protected route and shouldn`t be accessabile in the first place 
        if(!user) {
            alert("You need to login first.")
            return 
        }
        const newMessage = {
            text: messageText,
            date: new Date(),
            author: user.email
        };
      // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "forum"),newMessage);
        if (!docRef) {
            throw new Error ("Something happend!")
            // I don`t need to return, becuase if you throw an error you don`t need to put it because it stops there 
        }   
        if(docRef){
            console.log("Document written with ID: ", docRef.id);
        }
    
    }

    useEffect(() => {
      getMessages()
    }, [])
    

  return (
    <div>
      <h1>
        This is your Place to connect - THE FORUM
      </h1>
      <div>
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
      component="form" onSubmit={handleMessageSubmit}
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
          onChange={handleMessageTextChange}
          />
          
      </div>
      <Button type="submit" variant="outlined" >
      Send
      </Button>
      </Box>
     
    </Stack>

      </div>
    </div>
  )
}

export default Forum;
