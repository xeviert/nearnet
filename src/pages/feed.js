import Image from "next/image";
import StatusUpdater from "@/components/statusUpdater";
import StatusModal from "@/components/StatusModal";

export default function Feed() {
  return (
      <div className="relative">
      <StatusUpdater />
      <div className="z-10">
        <StatusModal />
      </div>
    </div>
  )
}