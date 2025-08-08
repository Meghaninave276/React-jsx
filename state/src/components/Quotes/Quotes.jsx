import "./Quotes.css";

const Quotes = ({ quote, author }) => {
  return (
       
    <div className="quote-card">
   
      <h4 className="quote-text">"{quote}"</h4>
      <h3 className="quote-author">- {author}</h3>
    </div>
  );
};

export default Quotes;
