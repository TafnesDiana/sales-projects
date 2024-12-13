import BannerFixo from "../_components/banner-fixo";
import Button from "../_components/buttons/button";

const Checkout = () => {

    return (
        <>

            <BannerFixo
                firstTitle="Checkout"
                secondTitle="Cart"
                thirdTitle="checkout"
            />
            <div className="flex justify-center items-center">
                <div className="w-full max-w-7xl bg-white rounded-lg  p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 font-poppins">Billing Details</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border  font-poppins border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border  font-poppins border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Company name (Optional)"
                                className="w-full font-poppins border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            />
                            <input
                                type="text"
                                placeholder="ZIP Code"
                                className="w-full font-poppins border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            />
                            <input
                                type="text"
                                placeholder="Country / Region"
                                className="w-full font-poppins border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            />
                            <input
                                type="text"
                                placeholder="Street address"
                                className="w-full font-poppins border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            />
                            <input
                                type="text"
                                placeholder="Town / City"
                                className="w-full font-poppins border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            />
                            <input
                                type="text"
                                placeholder="Province"
                                className="w-full font-poppins border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            />
                            <input
                                type="text"
                                placeholder="Additional address"
                                className="w-full font-poppins border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-fullfont-poppins  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            />
                            <textarea
                                placeholder="Additional information"
                                className="w-full font-poppins border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-[#B88E2F]"
                            ></textarea>
                        </form>
                    </div>
                    <div>
                        <h2 className=" font-poppins text-2xl font-bold mb-6">Product</h2>
                        <div className="space-y-4 border-b border-gray-300 pb-4">
                            <div className="flex justify-between font-poppins">
                                <span>Apartment X - 1</span>
                                <span>Rs. 20,000.00</span>
                            </div>
                            <div className="flex justify-between font-poppins">
                                <span>Subtotal</span>
                                <span>Rs. 20,000.00</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg font-poppins">
                                <span>Total</span>
                                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex">
                            <img src="/images/circulo.svg" alt="" />
                            <p className="ml-4 font-poppins">Direct Bank Transfer</p>
                            </div>
                            <p className="font-poppins text-[#9F9F9F] pb-4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 font-poppins">
                                    <input type="radio" name="payment" className="form-radio" />
                                    <span>Direct Bank Transfer</span>
                                </label>
                                <label className="flex items-center space-x-2 font-poppins pb-4">
                                    <input type="radio" name="payment" className="form-radio" />
                                    <span>Cash on Delivery</span>
                                </label>
                                <p className="font-poppins">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy.</strong></p>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center items-center">
                            <Button className=" py-4 px-16 rounded-lg ">
                            Place Order
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;