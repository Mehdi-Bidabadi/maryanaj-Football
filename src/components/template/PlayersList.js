import DeffendersCard from "../module/DeffendersCard";
import ForwardsCard from "../module/ForwardsCard";
import GolerCard from "../module/GolerCard"
import MidfieldersCard from "../module/MidfieldersCard";


function PlayersList() {
    return (
        <>
            <GolerCard />
            <DeffendersCard />
            <MidfieldersCard />
            <ForwardsCard />
        </>
    )
}

export default PlayersList;