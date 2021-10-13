import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App(){
    return <div>
        <Header />
        <Note 
            Title = {notes.title}
            Content = {notes.content}

        />
        <Footer />
    </div>
}

export default App;