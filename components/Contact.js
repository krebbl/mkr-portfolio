export default function Contact() {
    return (<div className="max-w-[1024px] w-full mx-auto py-10 px-4">
        <a name={"contact"} />
        <div className={`full-w mx-auto py-10 md:grid md:grid-cols-2 md:gap-10 items-center text-center`}>
            <div>
                <h3 className='text-gray-700'>Want to build <span
                    className='text-[#C91041]'>cool</span> stuff with me? Hit
                    me on LinkedIn.</h3>
            </div>
            <div className="py-10">
                <a href={"https://www.linkedin.com/in/marcus-krejpowicz-33a72038"} className="inline-block px-6 py-3 text-lg font-semibold text-lg bg-[#4098D1] text-white rounded-full shadow-sm">My LinkedIn</a>
            </div>
        </div>
    </div>)
}
