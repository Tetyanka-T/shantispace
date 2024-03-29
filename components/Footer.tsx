
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-amber-950 py-2 text-white'>
      <Link href="/contacts" className="mx-[20px] text-lg 2xl:text-xl">Контакти</Link>
      <ul className="text-md mx-[20px] my-[20px] md:mt-20 2xl:text-xl">
        <li className="flex items-center mb-3">
          <MdOutlinePhoneIphone className="fill-white mr-2"/>
          <a href="tel:+380977339045">+380977339045 Дарина</a>
        </li>
        <li className="flex items-center mb-3">
          <MdOutlinePhoneIphone className="fill-white mr-2"/>
          <a href="tel:+380971250101">+380971250101 Світлана</a>
        </li>
        <li className="flex items-center mb-3">
          <CiLocationOn className="fill-white mr-2"/>
          <p>мк-рн. Юбілейний 12, прим. 40</p>
        </li>
        <li className="flex items-center">
          <FaInstagram className="fill-white mr-2"/>
          <a href="https://www.instagram.com/_shanti_space/" target="_blank">@_shanti_space</a>
        </li>
      </ul>
      <p className='mt-3 border-t-2 py-2 text-center'>&#169; {new Date().getFullYear()}</p>
      <a
      className="text-center block underline"
        
        href="https://tetyanka-t.github.io/portfolio/"
        target="_blanket"
      >
        Розробник
      </a>
    </footer>
  )
}

export default Footer