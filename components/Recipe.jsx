import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const Recipe = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:my-10 md:my-7 my-6">
      <div className="heading flex lg:md:justify-start justify-center lg:pl-14 md:pl-[3vw] lg:my-5 w-screen md:my-0 md:mb-7 sm:mb-11  my-0">
        <section className="text-gray-800 font-semibold lg:text-[40px] w-screen flex lg:justify-start justify-center lg:md:w-[50%] md:text-[32px] text-[24px] md:flex md:justify-start md:pl-6">
          Ashish Masale Recipes
        </section>
        <small className="text-gray-800 hidden lg:text-[22px] lg:flex md:flex items-center w-[50%] justify-end lg:pr-12 md:pr-[3vw] md:text-[15px]">
          <a href="https://recipeashishmasale.in/" className="underline">
            Visit Ashish Masale's Kitchen
          </a>
        </small>
      </div>
      <div className="content lg:flex justify-center items-center gap-6 md:sm:hidden">
        <div className="max-w-[344px]  overflow-hidden shadow-lg flex flex-col justify-center items-center py-3  ">
          <div className="image h-[30%] overflow-hidden rounded-2xl">
          <Image
            src="/assets/Recipe/1.svg"
            height={341}
            width={314}
            alt="recipe1"
            className="overflow-hidden hover:scale-150 transition-all duration-[5s] ease-out"
          />
          </div>
          <div className="px-6 py-4 h-[30vh]">
            <div className="font-bold text-xl mb-2 text-gray-800">
              Best Instant Pot Masala Rice Recipe
            </div>
            <p className="text-gray-700 text-base">
              Masala rice is a popular dish that is part of traditional Indian
              cuisine...
            </p>
            <br />
          </div>
          <div className="px-6 pt-4 pb-2 w-full flex justify-start h-[20%]">
            <a href="https://recipeashishmasale.in/instant-pot-masala-rice-recipe-%e0%a4%87%e0%a4%b8%e0%a4%9f%e0%a4%9f-%e0%a4%aa%e0%a4%9f-%e0%a4%ae%e0%a4%b8%e0%a4%b2-%e0%a4%b0/">
              <button className="py-2 px-3 bg-[#F9F3CF] text-black transition-all duration-150 hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="max-w-[344px] overflow-hidden shadow-lg flex flex-col justify-center items-center py-3 ">
          <div className="image h-[30%] overflow-hidden rounded-2xl">
          <Image
            src="/assets/Recipe/2.svg"
            height={341}
            width={314}
            alt="recipe1"
            className="overflow-hidden hover:scale-150 transition-all duration-[5s] ease-out"
          />
          </div>
          <div className="px-6 py-4 h-[30vh]">
            <div className="font-bold text-xl mb-2 text-gray-800">
              Best Grilled Chicken Breast with Roasted
            </div>
            <p className="text-gray-700 text-base">
              Grilled chicken breast is a nutritious and delicious food item
              that is typically...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 w-full flex justify-start h-[20%]">
            <a href="https://recipeashishmasale.in/best-grilled-chicken-breast-with-roasted-vegetables-recipegymdiet/">
              <button className="py-2 px-3 bg-[#F9F3CF] text-black transition-all duration-150 hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="max-w-[344px]  rounded overflow-hidden shadow-lg flex flex-col justify-center items-center py-3 ">
        <div className="image h-[30%] overflow-hidden rounded-2xl">
          <Image
            src="/assets/Recipe/3.svg"
            height={341}
            width={314}
            alt="recipe1"
            className="overflow-hidden hover:scale-150 transition-all duration-[5s] ease-out"

          />
          </div>
          <div className="px-6 py-4 h-[30vh]">
            <div className="font-bold text-xl mb-3 text-gray-800">
              Biryani recipe
            </div>
            <p className="text-gray-700 text-base py-6">
              Biryani is a popular Indian dish that originated in the Indian
              subcontinent...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 w-full flex justify-start h-[20%]">
            <a href="https://recipeashishmasale.in/biryani-recipe/">
              <button className="py-2 px-3 bg-[#F9F3CF] text-black transition-all duration-150 hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="max-w-[344px]  rounded overflow-hidden shadow-lg flex flex-col justify-center items-center py-3 ">
        <div className="image h-[30%] overflow-hidden rounded-2xl">
          <Image
            src="/assets/Recipe/4.svg"
            height={341}
            width={314}
            alt="recipe1"
            className="overflow-hidden hover:scale-150 transition-all duration-[5s] ease-out"

          />
          </div>
          <div className="px-6 py-4 h-[30vh]">
            <div className="font-bold text-xl mb-2 text-gray-800">
              Homemade White Sauce pasta recipe{" "}
            </div>
            <p className="text-gray-700 text-base">
              Pasta is a famous Italian dish that has become popular in India as
              well. It is a dough...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 w-full flex justify-start h-[20%]">
            <a href="https://recipeashishmasale.in/white-sauce-pasta/">
              <button className="py-2 px-3 bg-[#F9F3CF] text-black transition-all duration-150 hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------for medium devices-------------------------------------------------------- */}
      <div className="small mb-5">
        <Slider {...settings}> 
          <div className="tab">
            <div className=" rounded overflow-hidden flex flex-col justify-center items-center  ">
              <Image
                src="/assets/Recipe/1.svg"
                height={341}
                width={324}
                alt="recipe1"
              />
              <div className="sm:px-6 md:px-0 py-4 md:h-[30vh]">
                <div className="md:sm:text-[24px] font-semibold mb-2 text-gray-800 h-[50%]">
                  Best Instant Pot Masala Rice Recipe
                </div>
                <p className="text-gray-700 md:sm:text-[15px] ">
                  Masala rice is a popular dish that is part of traditional
                  Indian cuisine...
                </p>
                <br />
              </div>
              <div className="sm:px-6 md:px-0 pt-4 pb-2 w-full flex justify-start">
                <a href="https://recipeashishmasale.in/instant-pot-masala-rice-recipe-%e0%a4%87%e0%a4%b8%e0%a4%9f%e0%a4%9f-%e0%a4%aa%e0%a4%9f-%e0%a4%ae%e0%a4%b8%e0%a4%b2-%e0%a4%b0/">
                  <button className="py-2 px-3 bg-[#F9F3CF] text-black transition-all duration-150 hover: scale-105">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="tab">
            <div className="rounded overflow-hidden flex flex-col justify-center items-center">
              <Image
                src="/assets/Recipe/2.svg"
                height={341}
                width={324}
                alt="recipe1"
              />
              <div className="sm:px-6 md:px-0 py-4 md:h-[30vh]">
                <div className="font-semibold md:sm:text-[24px] mb-2 text-gray-800 h-[50%]">
                  Best Grilled Chicken Breast with Roasted
                </div>
                <p className="text-gray-700 text-[15px]">
                  Grilled chicken breast is a nutritious and delicious food item
                  that is typically...
                </p>
              </div>
              <div className="sm:px-6 md:px-0 pt-4 pb-2 w-full flex justify-start">
                <a href="https://recipeashishmasale.in/best-grilled-chicken-breast-with-roasted-vegetables-recipegymdiet/">
                  <button className="py-2 px-3 bg-[#F9F3CF] text-black transition-all duration-150 hover: scale-105">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="tab">
            <div className="rounded overflow-hidden flex flex-col justify-center items-center ">
              <Image
                src="/assets/Recipe/3.svg"
                height={341}
                width={324}
                alt="recipe1"
              />
              <div className="sm:px-6 md:px-0 py-4 md:h-[30vh] ">
                <div className="font-semibold md:sm:text-[24px] mb-2 text-gray-800 h-[50%]">
                  Biryani recipe
                </div>
                <p className="text-gray-700 text-[15px]">
                  Biryani is a popular Indian dish that originated in the Indian
                  subcontinent...
                </p>
              </div>
              <div className="sm:px-6 md:px-0 pt-4 pb-2 w-full flex justify-start">
                <a href="https://recipeashishmasale.in/biryani-recipe/">
                  <button className="py-2 px-3 bg-[#F9F3CF] text-black transition-all duration-150 hover: scale-105">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="tab">
            <div className="rounded overflow-hidden flex flex-col justify-center items-center">
              <Image
                src="/assets/Recipe/4.svg"
                height={341}
                width={324}
                alt="recipe1"
              />
              <div className="sm:px-6 md:px-0 py-4 md:h-[30vh] ">
                <div className="font-semibold md:sm:text-[24px] mb-2 text-gray-800 h-[50%]">
                  Homemade White Sauce pasta recipe{" "}
                </div>
                <p className="text-gray-700 text-[15px] ">
                  Pasta is a famous Italian dish that has become popular in
                  India as well. It is a dough...
                </p>
              </div>
              <div className="sm:px-6 md:px-0 pt-4 pb-2 w-full flex justify-start">
                <a href="https://recipeashishmasale.in/white-sauce-pasta/">
                  <button className="py-2 px-3 bg-[#F9F3CF] text-black transition-all duration-150 hover: scale-105">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Recipe;
