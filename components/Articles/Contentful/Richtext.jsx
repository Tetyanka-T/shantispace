import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import s from '@/app/styles/common.module.css'
import Link from 'next/link'
import Image from 'next/image'

// const options = {
//   renderMark: {
//     [MARKS.CODE]: text => {
//       return (
//         <pre>
//           <code>{text}</code>
//         </pre>
//       )
//     }
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => {
//       if (
//         node.content.find(item =>
//           item.marks?.find(mark => mark.type === 'code')
//         )
//       ) {
//         return (
//           <div className='my-2'>
//             <pre>
//               <code>{children}</code>
//             </pre>
//           </div>
//         )
//       }

//       return <p>{children}</p>
//     },

//     [INLINES.HYPERLINK]: (node, children) => {

//         return (
//           <Link href={`/articles/${node.data.target.fields.slug}`}>

//           </Link>
//         )

//     },

//     [INLINES.HYPERLINK]: node => {
//       const text = node.content.find(item => item.nodeType === 'text')?.value
//       return (
//         <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
//           {text}
//         </a>
//       )
//     },

//     [BLOCKS.EMBEDDED_ENTRY]: node => {
//       if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
//         return (
//           <iframe
//             height='400'
//             width='100%'
//             src={node.data.target.fields.embedUrl}
//             title={node.data.target.fields.title}
//             allowFullScreen={true}
//           />
//         )
//       }
//     },

//
//   }
// }

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className='my-2 text-gray-lg'>{children}</p>
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className='font-bold' href={node.data.uri} target='_blank'>
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className='text-xl font-bold'>{children}</h1>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className='text-lg font-bold'>{children}</h2>
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className='text-lg font-bold'>{children}</h3>
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className='text-lg font-bold'>{children}</h4>
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5 className='text-lg font-bold'>{children}</h5>
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6 className='text-lg font-bold'>{children}</h6>
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul>{children}</ul>
    }
  },
  [BLOCKS.EMBEDDED_ASSET]: node => {
    return (
      <Image
        src={'https:' + node.data.target.fields.file.url}
        height={280}
        width={320}
        alt={node.data.target.fields.title}
        className='mx-auto my-2'
      />
    )
  },
  [BLOCKS.QUOTE]: (node, children) => {
    return <blockquote>{children}</blockquote>
  }
}

const RichText = ({ content }) => {
  return <div>{documentToReactComponents(content, options)}</div>
}

export default RichText
