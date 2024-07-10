import Image from "next/image";

import styles from "@/components/module/Profile.module.css";

function ProfileCard({ data }) {
    const { name, img, personal, age, description, nationality, club_team } = data;
    console.log(data)
    return (
        <>
            <div className={styles.profile}>
                <Image className={styles.img} src={img} width={150} height={150} />
                <hr />
            </div>
            <div className={styles.detalies}>
                <div className={styles.bio}>
                    <div className={styles.titer}>
                        <h2>بیوگرافی</h2>
                    </div>
                    <div className={styles.desc}>
                        <p>نام و نام خانوادگی : <span>{name}</span></p>
                        <p>تیم باشگاهی : <span>{club_team}</span></p>
                        <p>ملیت : <span>{nationality}</span></p>
                        <p>سن : <span>{age}</span></p>
                    </div>

                </div>
                <div className={styles.info}>
                        <h2>توضیحات</h2>
                        <div>
                            <h4>زندگی</h4>
                            <p>{description}</p>
                        </div>
                        <div>
                        <h4>شخصی</h4>
                        <p>{personal}</p>
                        </div>
                </div>
            </div>


        </>
    )
}

export default ProfileCard;

