export default function Hero() {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto py-2 px-4 flex justify-center items-center">
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        {"let's build things together"}
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        {"Hello, I'm"} <span className='text-[#C91041]'>Marcus</span><br/>
                        A Fullstack-Developer 👨🏻‍💻
                    </h1>
                    <p className='py-4 text-gray-600 md:max-w-[60%] m-auto text-lg'>
                        {`I'm a fullstack web developer specialized in building digital experiences and tools for the web.
                        Currently I'm working as technical lead at ProCarement GmbH helping to build the leading health-care platform for patients with heart failure`}
                    </p>
                    <div className={'py-6'}>
                        <a href={"#contact"}
                           className="px-6 py-3 text-base font-semibold text-sm bg-[#75BD50] text-white rounded-full shadow-sm">
                            Want to get in touch?
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
