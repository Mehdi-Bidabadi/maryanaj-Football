"use client"
import ProfilePage from '@/components/template/ProfilePage';
import images from '@/constants/DataImg';
import { useParams } from 'next/navigation';

function page() {

  const { profileId } = useParams()

  const profile = images.filter((i) => i.userId === profileId)
  console.log(profileId)

  return (
    <ProfilePage data={profile}/>
  )
}

export default page;