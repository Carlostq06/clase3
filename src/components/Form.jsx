
function Form({setSearch, error}) {
    const handleChange=(ev)=>{
        setSearch(ev.target.value)
    }
  return (
    <>
        <form className="form"action="">
                <input type="text" placeholder="Ingrese el nombre" id="name" onChange={handleChange}/>
                
        </form>
        <p>{error}</p>  
    </>
  )
}

export default Form