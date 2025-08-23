import Image from "next/image";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import s from "@/app/styles/common.module.css"

function Contact() {
  return (
    <>
      <h3 className="text-lg text-center 2xl:text-2xl">Контакти</h3>
      <div className="flex items-center justify-start">
        <Image src="/logo.png" alt="logo" width={90} height={90}/>
        <p className="text-lg mt-9 ml-3 2xl:text-2xl">Простір здоров&apos;я</p>
      </div>
      <div className="md:grid md:grid-cols-2 my-3 2xl:text-2xl">
        <ul className="text-lg md:mt-20 2xl:text-xl">
          <li className="flex items-center mb-3">
            <MdOutlinePhoneIphone className="fill-amber-950 mr-2"/>
            <a href="tel:+380977339045">+380977339045 Дарина</a>
          </li>
          <li className="flex items-center mb-3">
            <MdOutlinePhoneIphone className="fill-amber-950 mr-2"/>
            <a href="tel:+380971250101">+380971250101 Світлана</a>
          </li>
          <li className="flex items-center">
            <CiLocationOn className="fill-amber-950 mr-2 mb-2"/>
            <p>мк-рн. Юбілейний 12, прим. 40</p>
          </li>
          <li className="flex items-center mr-2 mb-2">
            <FaInstagram className="fill-amber-950 mr-2 "/>
            <a href="https://www.instagram.com/_shanti_space/" target="_blank">@_shanti_space</a>
        </li>
        </ul>
        <Image src="/contact.jpg" alt="" width={320} height={350} className="w-full h-auto object-contain"/>
      </div>
      <div className={s.contact_maplocation}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.953204876068!2d33.434666576737776!3d47.956628963740734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db2006ffa02fa9%3A0x3df7f96e36e3d384!2z0LzRltC60YDQvtGA0LDQudC-0L0g0K7QstGW0LvQtdC50L3QuNC5LCAxMiwg0JrRgNC40LLQuNC5INCg0ZbQsywg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDUwMDAw!5e0!3m2!1suk!2sua!4v1702300440224!5m2!1suk!2sua" width="600" height="450"  referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
   
   
  )
}

export default Contact