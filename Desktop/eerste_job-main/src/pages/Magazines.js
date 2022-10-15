import ProductGallery from '../components/carousel/CarouselReact';
import Input from '../components/inputfield';
import Header from '../components/header';
import '../App.css';

function Magazines(props) {


return (
    <div className="App">
    <h1>{bladQuery}</h1>

      <div className="ONntwk__main">
        <Header />
        <div className="ONntwk__inputwrapper">
          <input
            name="BladQuery"
            onChange={handleChange}
            value={BladQuery}
            className="ONntwk__input" placeholder="Zoek naar een magazine, catalogus of infoblad  " type="text" />
          <Link className="ONntwk__sidebutton" to={`search/${BladQuery}`}>


            <img src={searchIcon} alt="searchIcon" className="Nntwk__searchIcon" />
          </Link>
        </div>
 <div className="ONntwk__carouselwrapper ">
          <ProductGallery />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}


export default Magazines;
