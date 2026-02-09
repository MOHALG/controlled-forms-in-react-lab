
import {useState} from 'react'

const Bookshelf = () => {
      
const [books, setBooks] = useState([])
const [newBook, setNewBook] = useState({
  title: '',
  author: '',
  
})

function handleInputChange(event) {
  setNewBook({
    ...newBook,
    [event.target.name]: event.target.value
  })
} 

function handleSubmit(event) {
    event.preventDefault() // prevents the default form submission behavior the form doesnt refresh
    const newBookEntry = {
      title: newBook.title,
      author: newBook.author
    }

    
    setBooks([...books, newBookEntry])
    setNewBook({
      title: '',
      author: ''
    })
}


  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
        </form>
        {books.map((book, index) => (
          <div key={index}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
      ))}

      </div>
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;