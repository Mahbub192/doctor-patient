import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
let productsp = [
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
];
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const SliderComponent = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="row no-gutters">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {productsp && productsp.length > 0
              ? productsp.map((product) => {
                  return (
                    <div className="">
                    <div
                      id="featuredProducts"
                      className="item float-left w-100"
                      key={product.name}
                    >
                      <div className="col-lg-5th col-md-4 col-sm-6 col-xs-12">
                        <div >
                          <div className="shadow-2xl   float-left">
                            <div className="image text-center">
                              <img
                                id={"img" + product.id}
                                src="/product.jpg"
                                alt="name"
                                title={product.name}
                              />
                            </div>
                            <div className="flex flex-col  w-100  mt-1 ">
                              <h5 className="brand text-capitalize float-left">
                                {product.brand}
                              </h5>
                              <span className="name">{product.name}</span>
                              <strong className="itemPrice p-0">
                                Price: {product.price}
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default SliderComponent;
