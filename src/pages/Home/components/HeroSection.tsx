import { FaArrowRight, FaArrowCircleRight } from 'react-icons/fa';

export default function HeroSection() {
    return (
        <section className={'bg-black'}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href="#"
                   className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-10 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                   role="alert">
                    <span
                        className="text-sm font-medium pl-3 text-primary/green">Borcelle is in development! See what's new</span>
                    <FaArrowRight className="ml-2 w-3 h-3" />
                </a>
                <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Borcelle SaaS Platform
                </h1>
                <p className="mb-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    At Borcelle, we focus on innovations that help restaurants thrive by enhancing operational efficiency and customer satisfaction.
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#"
                       className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-primary/green hover:text-primary/green/accent rounded-lg bg-primary-700">
                        Learn more
                        <FaArrowCircleRight className="ml-2 -mr-1 w-5 h-5" />
                    </a>
                    <a href="#"
                       className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary/green hover:bg-primary/green/accent">
                        Get Started
                        <FaArrowCircleRight className="ml-2 -mr-1 w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
