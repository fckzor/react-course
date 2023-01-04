import { Book } from './components/Book/Book'
import { Preloader } from './components/Preloader/Preloader'

const App = props => {
  return props.isLoading ? (
    <Preloader />
  ) : (
    <div>
      <div className="container">
        <Book name="JavaScript" year="2020" price="1500" />
        <Book name="Vue" year="2021" price="2000" />
        <Book name="React" year="2023" price="2500" />
      </div>
    </div>
  )
}

export default App
