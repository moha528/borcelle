import { FaBullhorn, FaBalanceScale, FaCogs, FaFileInvoiceDollar, FaPalette } from 'react-icons/fa';
import PriceCard from './PriceCard';

export default function PricingSection() {
    const starterFeatures = [
        { icon: FaBullhorn, text: "Basic reporting" },
        { icon: FaBalanceScale, text: "No setup, or hidden fees" },
        { icon: FaCogs, text: "Team size: ", highlight: "1-5 users" },
        { icon: FaFileInvoiceDollar, text: "Basic support: ", highlight: "6 months" },
        { icon: FaPalette, text: "Free updates: ", highlight: "6 months" },
    ];

    const businessFeatures = [
        { icon: FaBullhorn, text: "Advanced reporting" },
        { icon: FaBalanceScale, text: "No setup, or hidden fees" },
        { icon: FaCogs, text: "Team size: ", highlight: "6-20 users" },
        { icon: FaFileInvoiceDollar, text: "Priority support: ", highlight: "12 months" },
        { icon: FaPalette, text: "Free updates: ", highlight: "12 months" },
    ];

    const enterpriseFeatures = [
        { icon: FaBullhorn, text: "Comprehensive reporting" },
        { icon: FaBalanceScale, text: "No setup, or hidden fees" },
        { icon: FaCogs, text: "Team size: ", highlight: "21-100 users" },
        { icon: FaFileInvoiceDollar, text: "24/7 support: ", highlight: "24 months" },
        { icon: FaPalette, text: "Free updates: ", highlight: "24 months" },
    ];

    return (
        <section className="bg-black">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Designed for restaurant teams like yours
                    </h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Here at Borcelle, we focus on providing comprehensive solutions for restaurant management,
                        ensuring seamless operations and enhancing customer satisfaction.
                    </p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <PriceCard
                        title="Starter"
                        description="Perfect for small restaurants or startups."
                        price="$29"
                        duration="/month"
                        features={starterFeatures}
                        buttonText="Get started"
                        buttonLink="#"
                    />
                    <PriceCard
                        title="Business"
                        description="Ideal for growing restaurants and chains."
                        price="$99"
                        duration="/month"
                        features={businessFeatures}
                        buttonText="Get started"
                        buttonLink="#"
                    />
                    <PriceCard
                        title="Enterprise"
                        description="Best for large restaurant chains and franchises."
                        price="$499"
                        duration="/month"
                        features={enterpriseFeatures}
                        buttonText="Get started"
                        buttonLink="#"
                    />
                </div>
            </div>
        </section>
    );
}
