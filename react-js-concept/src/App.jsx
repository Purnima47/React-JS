import './App.css'
import ProductList from './components/products'
import ClassBasedComponent from './components/class-based-component'
import FunctionComponent from './components/functional-component'
import Users from './components/users';
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import UseReducer from './components/use-reducer-example';
import FormComponent from './components/form';
import LoginComponent from './components/login';
import RegisterComponent from './components/register';

// App --> product list --> product item --> button component (nested component)

const dummyProductData = ['P1', 'P2', 'P3'];

function App() {
  return (
    <div>
      <h1>REACT JS CONCEPTS</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionComponent /> */}

      {/* <ProductList dummyProductData={dummyProductData} name="Purnima" city="Mirzapur" /> */}
      {/* {<Users />} */}
      {/* <ContextButtonComponent /> */}
      {/* <ContextTextComponent /> */}
      {/* <UseReducer /> */}.
      {/* <FormComponent /> */}
      <div style={{display:'flex', gap:'20px'}}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  )
}

export default App
