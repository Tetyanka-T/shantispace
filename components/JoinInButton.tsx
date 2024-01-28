import Image from "next/image"
import Link from "next/link"

const JoinInButton = () => {
  return (
    <Link href="/register" target="_blank" className="flex items-center rounded-md border-2 p-1 border-amber-950 my-4 w-[220px] mx-auto">
      <Image src="/me.png" alt="малюнок асани" width={40} height={40} className="ml-2"/> <p className="text-center">Приєднатися до Shanti_Space</p>
    </Link>
  )
}

export default JoinInButton