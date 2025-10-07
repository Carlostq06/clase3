
function List({info}) {
  return (
    <div className="container">
        {info.map(item=><article key={item.id}>
            <img src={item.image}></img>
            <h4>{item.name}</h4>
        </article>)}
    </div>
  )
}

export default List