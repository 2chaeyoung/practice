import Link from "next/link";
import LayoutCon from "./LayoutCon";

const BackgroundSearch = () => {
    return (
        <div className="bg-no-repeat sm:bg-right bg-center bg-looking-srh-bg py-[5.5%]">
            <LayoutCon>
                <div className="md:w-[60%] w-[75%]">
                    <h2 className="sm:text-32 text-24 font-bold mb-4">
                        Are you aware of the best treatment options for your
                        condition?
                    </h2>
                    <p className="text-20 sm:mb-40 mb-28">
                        Let us help you! We've helped thousands of patients
                        positively improve their lives.
                    </p>
                </div>
                <div className="relative max-w-[800px] sm:mb-16 mb-8">
                    <form>
                        <input
                            type="text"
                            className="w-full h-20 px-8 rounded-[3rem] border-gray-300 border placeholder:italic placeholder:text-gray-600 placeholder:text-16"
                            placeholder="what are you looking for?"
                        />
                        <button className="w-20 h-20 absolute top-0 right-3 indent-[-9999px] bg-ico-blue-srh bg-no-repeat bg-[length:50%] bg-center">
                            search
                        </button>
                    </form>
                </div>
                <ul className="flex flex-wrap">
                    <li className="mt-4 mr-4">
                        <Link href="">
                            <a className="block px-6 py-2 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="mt-4 mr-4">
                        <Link href="">
                            <a className="block px-6 py-2 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="mt-4 mr-4">
                        <Link href="">
                            <a className="block px-6 py-2 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="mt-4 mr-4">
                        <Link href="">
                            <a className="block px-6 py-2 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                </ul>
            </LayoutCon>
        </div>
    );
};

export default BackgroundSearch;
