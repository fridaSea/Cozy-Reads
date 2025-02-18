import { Box, Button, Card, CardContent, Stack, TextField } from "@mui/material"
import Typography from '@mui/material/Typography';
import { addDoc, collection, limit, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "../../configuration/firebaseConfig";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import './Chat.css'
import SendIcon from '@mui/icons-material/Send';

type MessageType = {
    author: string;
    text: string;
    date: Timestamp;
    id: string;
}

function Chat() {
    const{user} = useContext(AuthContext)

    const [messages, setMessages] = useState<MessageType[] | null >(null)
    const [messageText, setMessageText] = useState<string>("");

    //Wird nicht mehr benötigt, da ich die messages jetzt mit getMessagesLive aufrufe
    // const getMessages = async () => {
    //     const querySnapshot = await getDocs(collection(db, "forum"));
    //     const messagesArray:MessageType[] = [];
    //     querySnapshot.forEach((doc) => {
    //         console.log('doc:>>', doc)
    //       console.log(`${doc.id} => ${doc.data().text}`);
    //       const message: MessageType = {
    //         text: doc.data().text,
    //         date: doc.data().date,
    //         author: doc.data().author,
    //         id: doc.id
    //       }
          
    //       messagesArray.push(message);
    //       setMessages(messagesArray)
    //     });
    //     console.log('messagesArray:>>' , messagesArray);
    // }

    // Format the Date
    const formatDate = (seconds:number) => {
      const formatedDate = new Date(seconds * 1000).toLocaleString()
      return formatedDate;
    }

    //RAUL:  e: ChangeEvent<HTMLTextAreaElement>
    // Write the message
    const handleMessageTextChange = (e:ChangeEvent<HTMLInputElement>) => {
    //   console.log('e.target.value :>>' , e.target.value);
      setMessageText(e.target.value);
    }


    // Submit the message 
    const handleMessageSubmit = async (e:FormEvent<HTMLFormElement>) => {
        // the default behaviour of a form is always to refresh the page. O prevent that with the following: 
        e.preventDefault();
   
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
      try {
        const docRef = await addDoc(collection(db, "forum"),newMessage); 
        if (docRef) {
            console.log("Document written with ID: ", docRef.id);
            // getMessages();
            setMessageText("");
        }

      } catch (error) {
        throw new Error ("Something happend!")
      }
        
    };


    const getMessagesLive = () => {
        // Order the messages by date
        // TO DO - INSERT PAGINATION 
        const docRef = collection(db, "forum");
        const q = query(docRef, orderBy("date" , "asc"), limit(20)); 
        // Snapshot
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            // they are creating an empty array and then they are looping over this snapshot and then they push the elements to the forums array
          const messagesArray:MessageType[] = [];
          querySnapshot.forEach((doc) => {
            const message: MessageType = {
                text: doc.data().text,
                date: doc.data().date,
                author: doc.data().author,
                id: doc.id
              }
            messagesArray.push(message);
            
          });
          setMessages(messagesArray);
        //   console.log("Current cities in CA: ", messagesArray.join(", "));
        });
    }


    useEffect(() => {
    //   getMessages()
        getMessagesLive();
    }, [])
    
  
    
// What is your favorite author? 
// Which book should every person have read at least once?
  return (
  <div className="container">
    <div>
      <h1>Welcome to the Chat</h1>
      <p>Here you can connect, talk about your favorite books or start your own bookclub</p>
    </div>

<Stack gap={1} className="align-items-center">
  <Card className="chat-card">
  {messages && messages.map( (message) => {
       let messageClass = '';
       if (message.author === user?.email) {
           messageClass = 'my-message'; // Wenn die Nachricht vom Benutzer stammt
       } else {
           messageClass = 'other-message'; // Wenn die Nachricht von jemand anderem stammt
       }
    return (
  <Card className={`card ${messageClass}`} sx={{ maxWidth: 345, background:"transparent"}} key={message.id}>
      <CardContent>
        {/* Email */}
        <Typography gutterBottom variant="h6" component="div">
                  {message.author}
        </Typography>
        {/* Datum */}
        <Typography gutterBottom variant="p" component="div">
            {formatDate(message.date.seconds)}
        </Typography>
        {/* Message */}
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
    className="message-box"
    >
      <div>
          <TextField
          // className="text-field"
          id="outlined-multiline-flexible"
          label="Your Text"
          multiline
          maxRows={6}
          variant="outlined"
          onChange={handleMessageTextChange}
          value={messageText}
          />
      </div>
      <Button className="button message-button" type="submit" variant="outlined">
        <SendIcon/>
      {/* Send */}
      </Button>
    </Box>
  </Card>
</Stack>

</div>
  )
}

export default Chat;