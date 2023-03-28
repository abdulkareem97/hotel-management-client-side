import React from 'react'
import { Link } from 'react-router-dom'

const About = ({user}) => {
    return (
        <>
            <div class="bg-white">
                <div class="pt-1 pb-12 max-w-7xl mx-auto">
                    <div class="container">
                        <div class="flex flex-wrap justify-between items-center ">
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="flex items-center sm:-mx-4">
                                    <div class="w-full xl:w-1/2 px-3 sm:px-4">
                                        <div class="py-3 sm:py-4">
                                            <div class="">
                                                <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7" alt=""
                                                    class="rounded-2xl w-full" />
                                              
                                            </div>
                                        </div>
                                        <div class="py-3 sm:py-4">
                                            <div class="">
                                                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt=""
                                                    class="rounded-2xl w-full" />
                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full xl:w-1/2 px-3 sm:px-4">
                                        <div class="my-4">
                                            <div class="">
                                                <img src="https://images.unsplash.com/photo-1606046604972-77cc76aee944" alt=""
                                                    class="rounded-2xl w-full" />
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                                <div class="mt-10 lg:mt-0  max-md:text-center">
                                    <span
                                        class="font-semibold text-base text-gray-600 mb-2 block uppercase">About
                                        Us</span>
                                    <h2 class="font-bold text-3xl sm:text-4xl text-dark mb-8 "
                                        data-content="website-headlines">Find The Perfect Hotel To Suit Your Needs, Anytime,
                                        Anywhere.</h2>
                                    <p class="text-base text-gray-600 mb-8 " data-content="about-us">Ak -
                                        Ideal Hotel was founded in 2023 with the goal of providing hotel managers with an easy
                                        way to find and book hotels worldwide. We offer a wide range of services, including
                                        hotel booking, price comparisons, and special offers on hotel stays.<br /><br />With
                                        over number of hotels in our database, we are confident that we can help you find the
                                        perfect hotel for your needs. Whether you're looking for a 5-star luxury resort or a
                                        budget-friendly motel, we can help you find the right property at the best price.</p>
                                    <Link to={ user ? '/account' : '/signup' }
                                        class="py-3 px-10 inline-flex items-center justify-center text-center text-white text-base bg-gray-600 hover:bg-gray-700 hover:no-underline font-medium rounded-lg ">Get
                                        Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About
