import '@app/home.scss'
import Footer from '@components/Footer'

const page = () => {
    return (
      <div className='aboutUs flex flex-col  w-screen overflow-x-hidden'>
          <div className="imag w-screen overflow-hidden lg:h-[700px] h-[230px]">
          <video src='assets/video/sample.mp4' autoPlay loop muted className='video w-full' />
          </div>
          <div className="flex text-black flex-col justify-center items-center lg:my-[80px] my-[60px] overflow-x-hidden">
            <section className=' flex w-[80%] '>
              <small className='flex lg:w-[38%] w-[100%]'><h1 className='lg:text-[62px] font-semibold text-[36px]'>Welcome to Ashish Masale</h1></small>
            </section>
            <div className='flex flex-col w-[80%] mt-8' >
              <small className='flex border-l-4 border-gray-700 pl-9'><p className='lg:text-[22px] text-[18px] py-2'>Back in 1986, two brothers open a shop under the tree of “SHISHAM” to fulfill their basic needs, and wrote the first page of our hirstory. Today we're known as “singhal grah udhyog private ltd”. During that time, they faced many challenges to sell their “masale”.</p></small>
            </div>
            <div className='flex flex-col w-[80%] mt-7' >
              <small className='flex border-l-4 border-gray-700 pl-9'><p className='lg:text-[22px] text-[18px] py-2'>Soon their younger brother joined the business and it is the result of their hard work and dedication that has brought this business to this level. In 2005, they started to manufacture their own masale, with a mission: to live and deliver WOW Today they're an Indian manufacturer, distributor, and exporter of ground spices and spice mixtures under the brand name Ashish Masale.</p></small>
            </div>
            <div className='flex flex-col w-[80%] mt-7' >
              <small className='flex border-l-4 border-gray-700 pl-9'><p className='lg:text-[22px] text-[18px] py-2'>They specialises and produces several unique traditional blends of spices suitable for different recipes and cuisines such as turmeric, coriander, chili, dal masala, chana, and sambar masala. There are others in this sequence, for example Chinese spices for snacks which as you may know are very popular in Agra, along with magic masala, tomato masala, lemon puff, kurkure masala, etc., and the last but not the least produces salts which are generally used in fasting such as black salt and saida salt.</p></small>
            </div>
            <div className='flex flex-col w-[80%] mt-7' >
              <small className='flex border-l-4 border-gray-700 pl-9'><p className='lg:text-[22px] text-[18px] py-2'>Their popularity is increasing all over India day-by-day. Ashish Masale has now taken a new step by stepping into the world of Online selling and is now available on Amazon. Keeping up with the trend by launching new products such as peri-peri, pizza seasoning and also introducing new packaging, is what they aim for. Ashish Masale focuses only on good and pure quality because they believe that what they can eat, they will feed to their customers.</p></small>
            </div>
            <div className='flex flex-col w-[80%] mt-7' >
              <small className='flex border-l-4 border-gray-700 pl-9'><p className='lg:text-[22px] text-[18px] py-2'>All their spices are tested and certified with FSSAI, ISO and AGMARK. Apart from being a good manufacturer, they indulge in activities which encourages growth and development of the society by providing employment opportunities, providing free masala to poor and much more.</p></small>
            </div>
          </div>
          <Footer/>
      </div>
    )
  }
  
  export default page