import express from 'express';
import path from 'path';
import fs from 'fs';
import {v4 as uuid} from 'uuid';
import {uuidv4, z} from 'zod';
import cors from 'cors';

interface Contact{
    id: any,
    name: any,
    phone: any,
    email: any,
    bookmark: any
}

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email"),
    bookmark: z.boolean().optional()
})

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

const contactsFilePath = path.join(__dirname, "contacts.json");

if(!fs.existsSync(contactsFilePath)) {
    fs.writeFileSync(contactsFilePath, JSON.stringify([]));
}

const readContactFromFile = () => {
    const fileData = fs.readFileSync(contactsFilePath, "utf-8");
    return JSON.parse(fileData);

}

const writeContactToFile = (contacts: any) => {
    fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));
    
}

// get all contact
app.get("/api/v1/contacts",(req, res)=> {
    const contacts = readContactFromFile();
    res.status(200).json({data: contacts, error: null, status: 200});
});

// save new contact
app.post("/api/v1/contacts",(req, res)=> {
   try {
     const contact = contactSchema.parse(req.body);
    const newContact = {
        id: uuidv4(),
        ...contact,
        bookmark: contact.bookmark ?? false 
    }

    const contacts = readContactFromFile();
    contacts.push(newContact);
    writeContactToFile(contacts);
    res.status(201).json({data: contacts, error: null, status: 201});
   } catch(error: any) {
    res.status(500).json({data: null, error: error.message, status: 500});
   }
})


app.listen(PORT, ()=> {
    console.log(`Server is running at localhost:${PORT}`)
})

