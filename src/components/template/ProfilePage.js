
import ProfileCard from "../module/ProfileCard"


 function ProfilePage({data}) {
 
  return (
    <div>
        {data.map((e) => (
            <ProfileCard key={e.name} data={e} />
        ))}
    </div>
  )
}

export default ProfilePage