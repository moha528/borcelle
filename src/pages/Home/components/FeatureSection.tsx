import { FaBullhorn, FaBalanceScale, FaCogs, FaFileInvoiceDollar, FaPalette, FaTools } from 'react-icons/fa';

export default function FeatureSection() {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight text-primary/green font-extrabold">
                        Designed for restaurant teams like yours
                    </h2>
                    <p className="text-neutral/20 sm:text-xl">
                        At Borcelle, we focus on innovations that help restaurants thrive by enhancing operational efficiency and customer satisfaction.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaBullhorn className="w-5 h-5 text-primary/green lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Boost your restaurant's presence with targeted marketing campaigns. Engage with customers and drive growth using our comprehensive marketing tools.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaBalanceScale className="w-5 h-5 text-primary/green lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Legal</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Ensure your restaurant complies with all regulations. Manage contracts, licenses, and legal documents efficiently with our legal management system.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaCogs className="w-5 h-5 text-primary/green lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Streamline your operations with automated workflows. Assign tasks, manage orders, and communicate seamlessly to boost efficiency.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaFileInvoiceDollar className="w-5 h-5 text-primary/green lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Manage your restaurant's finances with ease. Our tools help you with budgeting, financial planning, and audit-proof record-keeping.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaPalette className="w-5 h-5 text-primary/green lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Create an inviting atmosphere for your customers. Our design tools help you craft beautiful experiences that enhance your brand.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaTools className="w-5 h-5 text-primary/green lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Operations</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Optimize your restaurant's day-to-day operations with our customizable workflows. Ensure smooth and efficient service for your guests.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
