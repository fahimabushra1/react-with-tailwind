import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit"

const pricingOption = (props) => {
    const { name, price, benefits } = props.option
    return (
        <div className="bg-emerald-500 p-4 rounded-lg">
            <h2 className="bg-orange-700 py-2 rounded text-xl font-bold">{name}</h2>
            <p>
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-xl font-bold text-gray-600">/mo</span>
            </p>
            <div>
                <h3 className="text-xl text-left">Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit
                        benefit={benefit}
                    ></Benefit>)
                }
            </div>
            <button className="bg-yellow-600 flex justify-center w-full py-2 rounded mt-4 font-bold hover:text-black">Buy Now<ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon> </button>
        </div>
    )
}
export default pricingOption;