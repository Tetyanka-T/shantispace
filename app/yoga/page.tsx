import type { Metadata } from 'next'
import JoinIn from "@/components/JoinIn"
import Yoga from "../../components/Yoga"

export const metadata: Metadata = {
  title: 'ShantiSpace йога Кривий Ріг',
  description: "Простір здоров'я та душевної рівноваги, індивідуальні та групові заняття з йоги, заняття з рухової активності, індивідуальні та групові рухові програми, фізична активність та підтримка функціональності тіла, група формування правильної постави у дітей Кривий Ріг",
  keywords: 'йога, йогатерапія, цвяхостояння, групові заняття, індивідуальні заняття, Кривий Ріг, жіноче коло, практика асан, індивідуальний підхід, вихід з негативу, чистий розум, дихальні практики',
}

const YogaPage = () => {
  return (
    <div className="h-full">
      <Yoga/>
      <JoinIn/>
    </div>
    
  )
}

export default YogaPage