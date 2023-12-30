import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      <div>
        <p>Hi, I am</p>                                                                                                 
        <h1 className='font-bold text-8xl'>IDRIS <span className="block">ADAM IDRIS</span>                                                                    </h1>
        <p>A web developer, that love to develop with <span className="text-secondary-color">javasacript.</span></p>
      </div>
      <div className="my-5 flex items-center gap-5">
        <Link className="py-2 px-6 rounded-full bg-secondary-color text-black" href={'/hire-me'}>Hire me</Link>
        <Link className="py-2 px-6 rounded-full border-white border text-white" href={'/portfolio'}>Portfolio</Link>
      </div>
    </div>
  )
}
