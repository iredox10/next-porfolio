import {FaGit, FaGithub, FaJs, FaNodeJs, FaPython, FaReact} from 'react-icons/fa'
import Heading from '../components/Heading';
const page = () =>{
    return (
      <div className="p-10">
        <Heading text={'About me'} />
        <p className="my-5 w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          consequatur enim optio ipsam aspernatur consequuntur nam molestias
          nobis illo explicabo deserunt adipisci esse sapiente, reiciendis
          magnam suscipit non quod possimus ipsa nostrum labore incidunt.
          Quaerat expedita nemo soluta sed sit sapiente consequatur adipisci
          minima corrupti? Placeat suscipit atque assumenda voluptatum eveniet
          voluptate. Nesciunt aliquam esse perspiciatis praesentium, deserunt
          assumenda asperiores cum. Iste est eius necessitatibus nobis dolore
          earum hic eum! Perspiciatis, labore earum? Perferendis ullam corrupti
          debitis aliquam quos libero quae porro facere minima voluptatibus, a
          maxime totam magnam fugit recusandae suscipit architecto officia iste,
          molestias obcaecati placeat ab? Quod!
        </p>
        <div className='my-3'>
          <h3 className='text-xl font-bold my-3'>Technologies I Work With</h3>
          <div className="flex gap-28 ">
            <div>
              <div className="flex items-center gap-4">
                <FaJs className="text-yellow-500" />
                <p>javascript</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPython className="text-yellow-500" />
                <p>Python</p>
              </div>
              <div className="flex items-center gap-4">
                <FaReact className="text-yellow-500" />
                <p>React</p>
              </div>
              <div className="flex items-center gap-4">
                <FaReact className="text-yellow-500" />
                <p>Nextjs</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <FaGit className="text-yellow-500" />
                <p>Git</p>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub className="text-yellow-500" />
                <p>GitHub</p>
              </div>
              <div className="flex items-center gap-4">
                <FaNodeJs className="text-yellow-500" />
                <p>Nodejs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default page