import type { Metadata } from 'next'
import JoinIn from "@/components/JoinIn"
import Yoga from "../../components/Yoga"

export const metadata: Metadata = {
  title: 'ShantiSpace йога Кривий Ріг',
  description: "Простір здоров'я та душевної рівноваги, індивідуальні та групові заняття з йоги, фізичної реабілітації, оздоровчої гімнастики (ЛФК) Кривий Ріг",
  keywords: 'йога, йогатерапія, цвяхостояння, групові заняття, індивідуальні заняття, простір для відновлення, почувай себе як вдома, Кривий Ріг, жіноче коло, практика асан, індивідуальний підхід, вихід з негативу, чистий розум',
 
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