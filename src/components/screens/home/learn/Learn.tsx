import { FC } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

import Button from '@/components/ui/button/Button'

import styles from './Learn.module.scss'
import SendForm from './SendForm'

const Learn: FC = () => {
	return (
		<div className={styles.learn} id='umra'>
			<div className={styles.wrapper}>
				<div className={styles.big}></div>
				<div className={styles.content}>
					<h1>Umrani to'g'ri o'tkazishni o'rganing</h1>
					<p>
						Assalomu alaykum, buni kuzatib borish juda qiyin. Vaqti kelib, uning
						ochilishiga hammamiz ergashamizmi yoki bu dono odam azob chekib,
						maqtovchilarning dardi orqali qandaydir kattaroq sababni, ko‘pincha
						kichikmi yoki erkin buyukroq narsani ko‘ra oladimi? Uni hal
						qilgandan so'ng, muammoning vazifalari keladi. Biz uni tan jarohati
						olganlikda ayblaymiz.
					</p>
					<Button className={styles.btn}>
						<BsFillPlayFill fontSize={25} />
						Videoni ko'rish
					</Button>
				</div>
			</div>

			<SendForm />
		</div>
	)
}

export default Learn
