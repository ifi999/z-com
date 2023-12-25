import style from './post.module.css'
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: 'sample',
      nickname: 'ttt',
      image: '/yRsRRjGO.jpg',
    },
    content: 'sample content',
    createdAt: new Date(),
    images: [],
  }


  return (
     <article className={style.post}>
       <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname}/>
          </Link>
          <div className={style.postShade} />
        </div>

         <div className={style.postBody}>
           <div className={style.postMeta}>
             <Link href={`/${target.User.id}`}>
               <span className={style.postUserName}>{target.User.nickname}</span>
               &nbsp;
               <span className={style.postUserId}>@{target.User.id}</span>
               &nbsp;
               .
               &nbsp;
               <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
             </Link>
           </div>

           <div>{target.content}</div>

           <div className={style.postImageSection}>
             {/*{target.Images.length > 0 && (
               <div className={style.postImageSection}>
                 <img src={target.Images[0]?.link} alt=""/>
               </div>
             )}*/}
           </div>

           <ActionButtons />
         </div>

       </div>
     </article>
  )
}