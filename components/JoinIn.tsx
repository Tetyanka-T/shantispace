import Image from "next/image"
import Link from "next/link"

const JoinIn = () => {
  return (
    <div className="my-3">

     <h3 className="font-bolt text-center text-lg mb-2">Учасники простору Shanti_space мають змогу</h3>
     <ul className="text-md">
        <li className="flex items-center mb-2">
          <Image src="/double2.png" alt="" width={60} height={50}/>
          <p className="ml-2">задати питання Дарині Полозок - інструктору з йоги, йогатерапевту та фізтерапевту,</p>
        </li>
        <li className="flex items-center">
          <Image src="/double.png" alt="" width={60} height={50}/>
          <p className="ml-2">приєднатися до чату, в якому ви знайдете своїх однодумців, створювати індивідуальні чати та приєднатися до загального спілкування.</p> 
        </li>
     </ul>

    
    </div>
   
  )
}

export default JoinIn