
import BookingleCard from "./BookSingleCard";
const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
       <BookingleCard key={item.id} book={item}/>
      ))}
    </div>
  );
};

export default BooksCard;
