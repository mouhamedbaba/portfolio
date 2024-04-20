import { FavoriteProject } from "@/components/Home/FavoriteProject";
import { PendingProject } from "@/components/Home/PendingProject";
import { RecentProjet } from "@/components/Home/RecentProjet";


export default function Home() {
  return (
    <div>
      <RecentProjet/>
      <FavoriteProject />
      <PendingProject/>
    </div>
  );
}
