import type { Metadata } from 'next'
import ArticlesList from "@/components/Articles/ArticlesPage"
import Navigation from "@/components/Navigation"
import ProfileAdminBlog from "@/components/ProfileAdminBlog"

export const metadata: Metadata = {
  title: 'ShantiSpace блог Дарини Потапової, дипломованого фізичного терапевта, ерготерапевта, інструктора з йоги та йогатерапевта',
  description: "Простір здоров'я та душевної рівноваги, індивідуальні та групові заняття з йоги, фізичної реабілітації, оздоровчої гімнастики (ЛФК), група кореції постави у дітей, реабілітація військових Кривий Ріг",
  keywords: 'реабілітація, фізична реабілітація, цвяхостояння, лікувальна фізкультура, оздоровча гімнастика, ЛФК, групові заняття, індивідуальні заняття, простір для відновлення, почувай себе як вдома, Кривий Ріг, індивідуальний підхід, сучасні методи фізичної реабілітації, реабілітація військових, відновлення, корекція постави у дітей, свідомість та усвідомлення, корисні статті',
 
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