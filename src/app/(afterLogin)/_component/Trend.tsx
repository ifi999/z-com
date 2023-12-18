import Link from "next/link";
import style from './trend.module.css'

export default function Trend() {
  return (
    <Link href={'/search?q=트렌'} className={style.container}>
      <div className={style.count}>실시간 트렌드</div>
      <div className={style.title}>타이틀</div>
      <div className={style.count}>3 posts</div>
    </Link>
  )
}