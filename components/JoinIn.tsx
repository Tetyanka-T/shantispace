import Image from "next/image"
import JoinInButton from "./JoinInButton"

const JoinIn = () => {
  return (
    <div className="my-5">

     <h3 className="font-bolt text-center text-lg mb-2 2xl:text-2xl">Учасники простору Shanti мають змогу</h3>
     <ul className="text-lg my-4 mx-3 md:mx-6 lg:text-xl lg:ml-10 2xl:text-2xl">
        <li className="flex items-center mb-2">
          <Image src="/double2.png" alt="" width={60} height={50}/>
          <p className="ml-2">задати питання Дарині Полозок - інструктору з йоги, йогатерапевту та фізтерапевту</p>
        </li>
        <li className="flex items-center">
          <Image src="/double.png" alt="" width={60} height={50}/>
          <p className="ml-2">приєднатися до чату, в якому ви знайдете своїх однодумців, створювати індивідуальні чати та приєднатися до загального спілкування</p> 
        </li>
     </ul>

    <JoinInButton/>
    </div>
   
  )
}

export default JoinIn