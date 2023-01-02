//region Global Imports
import React from 'react';
import Link from 'next/link';
//endregion

//region Local Imports
import styles from "./social-follow.module.css";
import { Icon, Space, profiles } from "~shared";
import type { ProfilesKeys } from "~typings";
//endregion
const COMPONENT_KEY = "SocialFollow";
function SocialFollow() {
    return (
        <div className={styles.socialFollow}>
            <Space>
                {(Object.keys(profiles) as ProfilesKeys[]).map((profile) =>
                    <Link href={profiles[profile]} target='_blank' key={profile} className={styles.socialFollow__link}>
                        <Icon name={profile} />
                    </Link>)}
            </Space>
        </div>
    )
}

export {COMPONENT_KEY};
export default SocialFollow;