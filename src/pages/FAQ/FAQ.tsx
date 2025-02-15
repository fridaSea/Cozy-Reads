import { Typography } from '@mui/joy'
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './FAQ.css'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MailIcon from '@mui/icons-material/Mail';

function FAQ() {
  return (
    <div className="page-style"
    // sx={{ marginBottom:'15px', marginLeft:'15px', marginRight:'15px',}}
    >
      <h1>
        You have a question? We have the answer!
      </h1>

      <p>
      Are you looking for further information on the topics of book clubs, tutorials or your favorite book dealer?
      <br></br>
      Here you will find the most frequently asked questions and - more importantly - the answers to them. 
      </p>

    <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='question' component="span">How can I contact you?</Typography>
        </AccordionSummary>

    <Stack gap={3} className="align-items-center" >
        <AccordionDetails className="accordionDetails">
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   Just send us a little love letter
                </Typography>
        </AccordionDetails>
    </Stack>
       
     </Accordion>

{/* ACCORDION 2 */}
<Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='question' component="span">Do you offer eBooks?</Typography>
        </AccordionSummary>

    <Stack gap={3} className="align-items-center" >
        <AccordionDetails className="accordionDetails">
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   No. We are sorry, but we don`t offer any eBooks. 
                </Typography>
        </AccordionDetails>
    </Stack>
       
     </Accordion>

{/* ACCORDION 3 */}
<Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='question' component="span">Can I rate books online?</Typography>
        </AccordionSummary>

    <Stack gap={3} className="align-items-center" >
        <AccordionDetails className="accordionDetails">
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   Not jet ;)
                </Typography>
        </AccordionDetails>
    </Stack>
       
     </Accordion>

{/* ACCORDION 4 */}
<Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='question' component="span">Can I start my own book club?</Typography>
        </AccordionSummary>

    <Stack gap={3} className="align-items-center" >
        <AccordionDetails className="accordionDetails">
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   Yes, sure you can. 
                   Just connect yourself through the chat with other people around your town or announce an online book club. 
                </Typography>
        </AccordionDetails>
    </Stack>
       
     </Accordion>

{/* ACCORDION 5 */}
<Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='question' component="span">How often do we meet in the book club?</Typography>
        </AccordionSummary>

    <Stack gap={3} className="align-items-center" >
        <AccordionDetails className="accordionDetails">
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   This is totally up to you and you book club friends. You can decide freely how often you would like to meet. 
                   If you want to talk about the whole book in one session or if you prefer to talk about the different chapters. 
                   Just find out what fits best for you guys. 
                </Typography>
        </AccordionDetails>
    </Stack>
       
     </Accordion>

    <p>
    Your question is not answered here? Then please send us an email to: 
    <a href="mailto:maria.kluge.codes@gmail.com" target="blank"> customerhappiness@cozyreads.com </a>
    
    <br></br>
    And most importantly: Enjoy Reading 
    <br></br>
    <SentimentSatisfiedAltIcon/>
    </p>

    </div>

  )
}

export default FAQ
