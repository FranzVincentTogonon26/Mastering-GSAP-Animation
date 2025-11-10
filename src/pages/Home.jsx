import { Link } from "react-router-dom";
import { Gsap_Animation } from "../constant";

const Home = () => {
    return ( 
       <main className="container">
            <div className="flex flex-col">
               <h1>GSAP Animation</h1>
               <ol className="flex flex-col mt-10">
                 {
                    Gsap_Animation.map((animation, index) => (
                        <li key={index} className="flex flex-row gap-2 hover:bg-zinc-800/50 rounded-lg p-5">
                            <p><span className="text-zinc-300 text-sm">{index+1}.</span></p>
                            <div className="flex flex-col flex-1">
                            <Link to={animation.path} className="text-blue-800 font-semibold">
                                {animation.title}
                            </Link>
                            <p className="text-xs text-zinc-300">{animation.description}</p>
                            </div>
                            <svg className="size-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 4 2 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 l -6 6 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 s 0.105469 -0.519531 0.292969 -0.707031 l 5.292969 -5.292969 l -5.292969 -5.292969 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" fill="#ffffff"></path> </g></svg>
                        </li>
                    ))
                }
               </ol>
            </div>
       </main>
     );
}
 
export default Home;