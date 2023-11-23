import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/uploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}
const Library = ({ songs }: LibraryProps) => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const uploadMusic = () => {
    
    if (!user) {
      authModal.openModal();
      return;
    }

    return uploadModal.openModal();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={uploadMusic}
          size={20}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <div key={item.id}>
            <MediaItem onClick={() => {}} key={item.id} data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
