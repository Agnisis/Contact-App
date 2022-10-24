import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import './App.css';

function App() {
  const contacts=[
    {
    id:"1",
    "name":"Agnisis",
    "email":"agnisis@gmail.com"
  },
  {
    id:"2",
    "name":"Akash",
    "email":"akash@gmail.com"
  },
  {
    id:"3",
    "name":"Shilpi",
    "email":"shilpi@gmail.com"
  },
  {
    id:"4",
    "name":"Panna",
    "email":"panna@gmail.com"
  }
  ]
  return (
    <div className="ui container">
     <Header/>
    <AddContact />
    <ContactList contacts={contacts}/>
      
     
    </div>
  );
}

export default App;
