import Image from "next/image"
import SliderCertificate from "./SliderCertificate"

const ProfileAdminBlog = () => {
  return (
    <div className="mx-auto pt-8">
        <Image src="/profile-admin.jpg" alt="" width={320} height={200} className="mx-auto"/>
        <p className="my-2 text-base font-normal tracking-normal leading-6">
            Привіт! Моє ім&apos;я Дарина і цей блог веду я. Даний блог про ....., на різні теми. 
            Пишу про те що мені цікаво та може бути корисним для кожного.
        </p>
       <SliderCertificate/>
    
    </div>
  )
}

export default ProfileAdminBlog