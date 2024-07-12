
import ProfilePage from '@/components/template/ProfilePage';
import images from '@/constants/DataImg';

function page(props) {
  const {params} = props;


  const profile = images.filter((i) => i.userId === params.profileId)
  console.log(props)

  return (
    <ProfilePage  data={profile} />
  )
}

export default page;