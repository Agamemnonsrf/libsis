import './App.css'
import BookCover from './components/book-cover'
import BookTable from './components/book-table'

function App() {

    const categories = ["My normal books", "Nice books", "Books I like", "Books I don't like", "Books that prophecy the end of the world"]

    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "My normal books" },
        { title: "The Da Vinci Code", author: "Dan Brown", category: "Nice books" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Books I like" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Books I like" },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Books I like" },
        { title: "The Shining", author: "Stephen King", category: "Books I don't like" },
        { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", category: "Books that prophecy the end of the world" },
        { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", category: "Books I like" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Books I like" }
    ]

    const bookColors = [
        "burlywood",
        "chocolate",
        "coral",
    ]

    return (
        <>
            <header>
                <h1>The Library at the End of Time, Past the Land of Dreams</h1>
            </header>
            <div className='reading-area'>
                <BookTable categories={categories} books={books} bookColors={bookColors} />
                <BookCover mainColor="#663498" />
            </div>
        </>
    )
}

export default App
