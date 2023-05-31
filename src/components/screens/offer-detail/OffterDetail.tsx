import { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiPlusMedical } from 'react-icons/bi'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { GrMap } from 'react-icons/gr'

import Layout from '@/components/layout/Layout'

import styles from './OffterDetail.module.scss'

const OffterDetail: FC = () => {
	return (
		<Layout title='Offer-detail' description='offer detail page this beautiful'>
			<div className={styles.detail}>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<div className={styles.standartPlus}>
							<div className={styles.head}>
								<span>Umra standart plus</span>
								<span>16 iyun - 6 may </span>
							</div>
							<div className={styles.body}>
								<div className={styles.stars}>
									<AiFillStar fontSize={18} fill='yellow' />
									<AiFillStar fontSize={18} fill='yellow' />
									<AiFillStar fontSize={18} fill='yellow' />
									<AiFillStar fontSize={18} fill='yellow' />
								</div>
								<h4>18 Tun Makkada</h4>
								<p>
									<GiAirplaneDeparture fontSize={18} />
									Uchish Toshkentdan Toshkent airways
								</p>
								<BiPlusMedical fontSize={26} />
								<div className={styles.stars}>
									<AiFillStar fontSize={18} fill='yellow' />
									<AiFillStar fontSize={18} fill='yellow' />
									<AiFillStar fontSize={18} fill='yellow' />
								</div>
								<h4>3 Tun Madinada</h4>
							</div>
							<div className={styles.footer}>
								<div>
									<GrMap fontSize={18} />
									<span>Masjid Al-Xaramdan 1500m</span>
								</div>
							</div>
						</div>
						<div className={styles.comfort}>22da</div>
						<div className={styles.standart}>grgrg</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default OffterDetail
