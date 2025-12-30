import type { Metadata } from 'next'
import ArticlesList from "@/components/Articles/ArticlesPage"
import Navigation from "@/components/Navigation"
import ProfileAdminBlog from "@/components/ProfileAdminBlog"

export const metadata: Metadata = {
  title: 'ShantiSpace блог Дарини Потапової, дипломованого фізичного терапевта, ерготерапевта, інструктора з йоги та йогатерапевта',
  description: "Простір здоров'я та душевної рівноваги, індивідуальні та групові заняття з йоги, заняття з рухової активності, індивідуальні та групові рухові програми, фізична активність та підтримка функціональності тіла, група формування правильної постави у дітей Кривий Ріг",
  keywords: 'оздоровча рухова активність, цвяхостояння, лікувальна фізкультура, оздоровча гімнастика, групові заняття, індивідуальні заняття, Кривий Ріг, індивідуальний підхід, сучасні методи фізичної активності, консультації для військових, формування правильної постави у дітей, свідомість та усвідомлення, корисні статті', 
}
const BlogPage = () => {
  return (
    <div>
      <Navigation section="Блог"/>
      <ProfileAdminBlog/>
      <ArticlesList/>
    </div>
  )
}

export default BlogPage