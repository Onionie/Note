import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(){
    return <div>
        <Header />
        <Note 
            Title = {notes[0].title}
            Content = {notes[0].content}
        />
        <Footer />
    </div>
}

export default App;