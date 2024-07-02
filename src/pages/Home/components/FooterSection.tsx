import {FaUtensils} from "react-icons/fa";

export default function FooterSection(){
    return (
        <>
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#"
                       className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                        <FaUtensils className="mr-2 h-8"/>
                        Borcelle
                    </a>
                    <p className="my-6 text-gray-500 dark:text-gray-400">Empowering restaurants with seamless management
                        solutions.</p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Features</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#"
                                                                                                        className="hover:underline">Borcelle™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    );
}
