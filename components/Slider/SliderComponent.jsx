import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Button, Stack } from "@mui/material";
let productsp = [
  {
    id: 1,
    doctor: "Doctor Name",
    url: "products-number-1",
  },
  {
    id: 1,
    doctor: "Doctor Name",
    url: "products-number-1",
  },
  {
    id: 1,
    doctor: "Doctor Name",
    url: "products-number-1",
  },
  {
    id: 1,
    doctor: "Doctor Name",
    url: "products-number-1",
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
                        className="item float-left w-100 border-2 px-2 py-5"
                        key={product.name}
                      >
                        <div className=" col-lg-5th col-md-4 col-sm-6 col-xs-12">
                          <div className="">
                            <div className="shadow-2xl  px-2 float-left">
                              <div className="image text-center">
                                <img
                                  id={"img" + product.id}
                                  src="https://yt3.googleusercontent.com/ytc/AGIKgqPmK1ByzeeLa49q6DJoTKm0_2kTHVXaIpaV25FSYw=s900-c-k-c0x00ffffff-no-rj"
                                  alt="name"
                                  title={product.name}
                                />
                              </div>
                              <div className="flex flex-col  w-100  mt-1 ">
                                <h1 className="text-xl font-bold brand text-capitalize float-left">
                                  {product.doctor}
                                </h1>
                                <h2>Department name</h2>
                                <p className="text-gray-600 mt-2 flex items-center gap-3">
                                  <EditLocationIcon /> Dhaka
                                </p>
                                <p className="text-gray-600 mt-2 flex items-center gap-3">
                                  <AccessTimeIcon />
                                  Available on
                                </p>
                                <p className="text-gray-600 mt-2 flex items-center gap-3">
                                  <LocalAtmIcon />
                                  600
                                </p>
                                <Stack className="mt-5 mb-8" spacing={2} direction="row">
                                  <Button variant="outlined">Outlined</Button>
                                  <Button className="bg-sky-700" variant="contained">Contained</Button>
                                  </Stack>
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
