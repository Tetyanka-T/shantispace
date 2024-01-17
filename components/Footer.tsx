
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-amber-950 text-center py-2 text-white'>
      <Link href="/contacts" className="text-lg text-center 2xl:text-2xl">Контакти</Link>
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
          <a href="https://www.instagram.com/_shanti_space/" target="_blank">@shanti_space</a>
        </li>
      </ul>
      <p className='mt-3'>&#169; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer