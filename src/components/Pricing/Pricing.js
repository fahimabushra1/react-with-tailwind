import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'lifetime Free',
                'unlimited Deals',
                'localized Deals',
                'fantastics Deals',
                'crazy Deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'everything regular',
                'unlimited Deals',
                'localized Deals',
                'fantastics Deals',
                'crazy Deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'everything premium',
                'unlimited Deals',
                'localized Deals',
                'fantastics Deals',
                'crazy Deals'
            ]
        },
    ]

    return (
        <div className="bg-orange-700 p-4 mt-8 text-center text-white">
            <h1 className="text-6xl font-mono">Best Deal of the town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean et tortor at.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {pricingOptions.map(option => <PricingOption
                    key={option.id}
                    option={option}
                ></PricingOption>)

                }
            </div>
        </div>


    )
}
export default Pricing;