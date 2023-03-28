import { Link } from 'react-router-dom';


const Home = ({user}) => {

    return (
        <>

            {/* first section */}
            <div class="bg-white">
                <div class="px-4 pb-16 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
                    <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
                        <p
                            class="inline-block px-3 py-px mb-2 text-base font-semibold tracking-wider w-full text-gray-600 uppercase">
                            Ak - Ideal Hotel</p>
                        <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto "
                            data-content="website-headlines">Get The Best Deals On Hotels Worldwide With Ak-Ideal Hotel</h2>
                        <p class="text-base text-gray-700 md:text-lg"
                            data-content="product-descriptions">Ak is the most comprehensive hotel information website. With
                            accurate and up to date information on all hotels world wide, Ak provides a portal for travelers to
                            efficiently find what that are looking for</p>
                    </div>
                    <div class="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                        <div class=""><img class="object-cover w-full h-56 rounded shadow-lg"
                            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" alt="" />

                        </div>
                        <div class=""><img class="object-cover w-full h-56 rounded shadow-lg "
                            src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22" alt="" />

                        </div>
                        <div class=" max-md:hidden"><img class="object-cover w-full h-56 rounded shadow-lg "
                            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c" alt="" />

                        </div>
                        <div class=" max-md:hidden" ><img class="object-cover w-full h-56 rounded shadow-lg "
                            src="https://images.unsplash.com/photo-1578681041175-9717c16b0d66" alt="" />

                        </div>
                    </div>

                    <div class="flex items-center justify-center">
                        <Link to={ user ? '/account' : '/signup' }
                            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-700 focus:shadow-outline focus:outline-none">Sign
                            up</Link>
                        <Link to={'/about'} aria-label=""
                            class="inline-flex items-center font-semibold transition-colors duration-200 text-gray-900 hover:text-gray-800 ">Learn
                            more</Link>
                    </div>
                </div>
            </div>






            {/* second section */}
            <div class="bg-white py-6 max-md:mx-3">
                <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
                    <div class="flex flex-wrap items-center sm:-mx-3">
                        <div class="w-full md:w-1/2 md:px-3">
                            <div
                                class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 class="text-5xl font-extrabold text-black "
                                    data-content="website-headlines">Get the Perfect Hotel for Your Trip with Ak-Ideal Hotels!
                                </h1>
                                <p class="mx-auto text-xl text-gray-600"
                                    data-content="website-subheadlines">Book your stay in a hotel with Ak - Ideal Hotel. We
                                    provide information about the number of hotels around the world for booking and give offers
                                    on booking your hotel on different occasions.</p>
                                <div class="relative flex flex-row space-x-4">
                                    <Link to={ user ? '/account' : '/signup' }
                                        class="inline-flex items-center justify-center h-12 px-6 mr-1 font-medium transition duration-200 rounded shadow-md bg-gray-600 text-white focus:shadow-outline focus:outline-none ">
                                        Try It Free
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" data-original-title="" title="">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                    <Link to={'/about'}
                                        class="flex items-center h-12 px-6 py-3 rounded-md text-gray-600 bg-gray-100 ">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="w-full h-auto relative rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl"
                                data-rounded-max="rounded-full">
                                <img src="https://images.unsplash.com/photo-1560200353-ce0a76b1d438"
                                    class="rounded-md " />

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* third section */}
            <div class="bg-white">
                <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
                    data-content="how-it-works">
                    <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p
                                class="inline-block mb-2 text-base font-semibold tracking-wider text-gray-600 uppercase rounded-full">
                                How it works</p>
                        </div>
                        <h2 class="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto "
                            data-content="website-headlines">Secure Your Hotel Bookings With Ak-Ideal and Enjoy Special Offers!
                        </h2>
                        <p class="text-base text-gray-600 md:text-lg"
                            data-content="website-subheadlines">we provide information about the number of hotels world wide for
                            booking we give offers on booking on the different occasion</p>
                    </div>
                    <div class="grid gap-8 row-gap-0 lg:grid-cols-3">
                        <div class="relative text-center" data-subcontent="step_1">
                            <div
                                class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 sm:w-20 sm:h-20">
                                <svg class="w-12 h-12 text-gray-600 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </div>
                            <h6 class="mb-2 text-2xl text-gray-900 font-extrabold "
                                data-subcontent="step-title">Step 1</h6>
                            <p class="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto"
                                data-subcontent="step-content">1. customer visits our website</p>

                            <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg class="w-8 text-gray-200 transform rotate-90 lg:rotate-0" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                                    <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                                </svg>
                            </div>
                        </div>
                        <div class="relative text-center" data-subcontent="step_2">
                            <div
                                class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 sm:w-20 sm:h-20">
                                <svg class="w-12 h-12 text-gray-600 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </div>
                            <h6 class="mb-2 text-2xl text-gray-900 font-extrabold "
                                data-subcontent="step-title">Step 2</h6>
                            <p class="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto"
                                data-subcontent="step-content">2. customer select the hotel they want to book</p>
                            <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg class="w-8 text-gray-200 transform rotate-90 lg:rotate-0" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                                    <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                                </svg>
                            </div>
                        </div>
                        <div class="relative text-center" data-subcontent="step_3">
                            <div
                                class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 sm:w-20 sm:h-20">
                                <svg class="w-12 h-12 text-gray-600 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </div>
                            <h6 class="mb-2 text-2xl text-gray-900 font-extrabold "
                                data-subcontent="step-title">Step 3</h6>
                            <p class="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto"
                                data-subcontent="step-content">3. customer contact the hotel through our website</p>

                        </div>
                    </div>
                </div>
            </div>



            {/* fourth section */}

            <div class="bg-white body-font">
                <div class="container px-5 py-4 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-4xl text-3xl font-bold text-center title-font text-gray-900 mb-4 "
                            data-content="website-headlines">Find Your Ideal Hotel and Enjoy Special Offers On Your Bookings
                        </h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600"
                            data-content="website-subheadlines">Ak - Ideal Hotel provides information about the number of hotels
                            world wide for booking we give offers on booking on the different occasion</p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="p-2 sm:w-1/2 w-full" data-content="features">
                            <div class="bg-gray-50 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="3" class="text-gray-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p class="title-font text-gray-600 font-medium w-full"
                                    data-subcontent="feature-title">Get the best deals on hotels</p>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full" data-content="features">
                            <div class="bg-gray-50 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="3" class="text-gray-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p class="title-font text-gray-600 font-medium w-full"
                                    data-subcontent="feature-title">The hotel industry is booming and Ak - Ideal Hotel is here
                                    to help you find the perfect place to stay no matter where you're traveling. With our
                                    comprehensive list of hotels worldwide, we make it easy to find and book the perfect
                                    accommodations for your next trip. And, with our special offers</p>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full" data-content="features">
                            <div class="bg-gray-50 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="3" class="text-gray-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p class="title-font text-gray-600 font-medium w-full"
                                    data-subcontent="feature-title">offers and bookings</p>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full" data-content="features">
                            <div class="bg-gray-50 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="3" class="text-gray-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p class="title-font text-gray-600 font-medium w-full"
                                    data-subcontent="feature-title">Offers and discounts</p>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full" data-content="features">
                            <div class="bg-gray-50 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="3" class="text-gray-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p class="title-font text-gray-600 font-medium w-full"
                                    data-subcontent="feature-title">Get the best deals on hotels</p>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full" data-content="features">
                            <div class="bg-gray-50 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="3" class="text-gray-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p class="title-font text-gray-600 font-medium w-full"
                                    data-subcontent="feature-title">Save on your dream vacation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* fifth section */}

            <div class="py-4 bg-white">
                <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                    <h2 class="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl "
                        data-content="cta">Book from world wide hotels</h2>
                    <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                        data-content="website-subheadlines">
                        <span class="placeholder medium"></span>
                        <span class="placeholder medium"></span>
                    </p>
                    <div class="flex justify-center mt-8 space-x-3">
                        <Link to={ user ? '/account' : '/signup' }
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-gray-600 rounded-md shadow hover:bg-gray-700 ">Sign
                            Up Today</Link>
                        <Link to={'/about'}
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 ">Learn
                            more</Link>
                    </div>
                </div>
            </div>









        </>
    )
}

export default Home


