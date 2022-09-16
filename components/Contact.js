export default function Contact() {
    return (<div className="max-w-[1024px] w-full mx-auto py-10 px-2">
        <a name={"contact"} />
        <div className={`full-w mx-auto py-20 grid grid-cols-2 gap-10 items-center`}>
            <div>
                <h3 className='text-gray-700'>Want to build <span
                    className='text-[#C91041]'>cool</span> stuff with me? Hit
                    me on LinkedIn.</h3>
            </div>
            <div>
                <a href={"https://www.linkedin.com/in/marcus-krejpowicz-33a72038"} className="px-6 py-3 text-lg font-semibold text-sm bg-[#4098D1] text-white rounded-full shadow-sm">My LinkedIn</a>
            </div>
        </div>
    </div>)
}
