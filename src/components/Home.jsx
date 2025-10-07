import List from './List'
import Form from './form'
function Home({setSearch,error,info}) {
  return (
    <div>
        <h1>Api de Rick and Morty</h1>
        <Form setSearch={setSearch} error={error}/>
        <List info={info}/>
    </div>
  )
}

export default Home