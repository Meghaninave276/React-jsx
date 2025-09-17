export default function Cart({ cartlist }) {
  return (
    <div>
      <h1 className="text-center">Cart Page</h1>
      <div className="pro-box">
        {cartlist.map((c, index) => (
          <div className="p" key={index}>
            <img src={c.image} alt="" />
            <h3>{c.title}</h3>
            <p>{c.category}</p>
            <h4>{c.price}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
