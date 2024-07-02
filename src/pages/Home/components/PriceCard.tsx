import {FaArrowCircleRight, FaBalanceScale, FaBullhorn, FaCogs, FaFileInvoiceDollar, FaPalette} from "react-icons/fa";

export default function PriceCard({
                                      title = "Starter",
                                      description = "Perfect for small restaurants or startups.",
                                      price = "$29",
                                      duration = "/month",
                                      features = [
                                          { icon: FaBullhorn, text: "Basic reporting" },
                                          { icon: FaBalanceScale, text: "No setup, or hidden fees" },
                                          { icon: FaCogs, text: "Team size: ", highlight: "1-5 users" },
                                          { icon: FaFileInvoiceDollar, text: "Basic support: ", highlight: "6 months" },
                                          { icon: FaPalette, text: "Free updates: ", highlight: "6 months" },
                                      ],
                                      buttonText = "Get started",
                                      buttonLink = "#"
                                  }) {
    return (
        <div
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{price}</span>
                <span className="text-gray-500 dark:text-gray-400">{duration}</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left self-center">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <feature.icon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"/>
                        <span>
                            {feature.text}
                            {feature.highlight && (
                                <span className="font-semibold"> {feature.highlight}</span>
                            )}
                        </span>
                    </li>
                ))}
            </ul>
            <a href={buttonLink}
               className="inline-flex w-fit mx-auto justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary/green hover:bg-primary/green/accent">
                {buttonText}
                <FaArrowCircleRight className="ml-2 -mr-1 w-5 h-5"/>
            </a>
        </div>
    );
}
