// write the book component code here
const bookCard=(props)=>{
    const {title, author, year, genre}=props.book;
    return (
        <div className="book-card">
          <h2>{title}</h2>
          <p><strong>Author:</strong> {author}</p>
          <p><strong>Year:</strong> {year}</p>
          <p><strong>Genre:</strong> {genre}</p>
        </div>
      );
}
export default bookCard;