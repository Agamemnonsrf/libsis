import { Category, Book, BookColor } from "../types/types";

type BookTableProps = {
    categories: Category[];
    books: Book[];
    bookColors: BookColor[];
}

const BookTable: React.FC<BookTableProps> = ({ categories, books, bookColors }) => {
    return (
        <table className='shelf'>
            {
                categories.map((category, index) => (
                    <>
                        <tr className="label-shelf" key={index}>
                            <td>{category}</td>
                        </tr>
                        <tr className="book-shelf">
                            <td>
                                {books.filter(book => book.category === category).map((book, index) => (
                                    <div className='book' key={index} style={{
                                        backgroundColor:
                                            bookColors[book.title.length % bookColors.length],
                                    }}>
                                        {book.title.charAt(0) + book.author.charAt(1)}
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </>
                ))
            }
        </table>
    )
}

export default BookTable;