import ProductGallery from '../components/carousel/CarouselReact';
import Input from '../components/inputfield';
import Header from '../components/header';


import '../App.css';

function Home(props) {
  const bladQuery = props.BladQuery
  return (
    <div className="App">

      <div className="ONntwk__main">
        <Header />
        <Input btntxt={"Laatst bekeken"} inputplaceholder={"Zoek naar een magazine, catalogus of infoblad "}/>
        <div className="ONntwk__carouselwrapper ">
          <ProductGallery />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
