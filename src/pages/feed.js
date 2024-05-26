import Image from "next/image";
import StatusUpdater from "@/components/StatusUpdater";
import StatusModal from "@/components/StatusModal";

export default function Feed() {
  return (
    <>
      <StatusUpdater />
        <StatusModal />
    </>
  )
}