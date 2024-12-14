import './App.css'
import ProductList from './components/products'
import ClassBasedComponent from './components/class-based-component'
import FunctionComponent from './components/functional-component'

// App --> product list --> product item --> button component (nested component)


const dummyProductData = ['P1', 'P2', 'P3'];


function App() {
  return (
    <div>
      <h1>REACT JS CONCEPTS</h1>
      <ClassBasedComponent />
      {/* <FunctionComponent /> */}

      {/* <ProductList dummyProductData={dummyProductData} name="Purnima" city="Mirzapur" /> */}
    </div>
  )
}

export default App
