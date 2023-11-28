"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: ({id: String | null})) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Ви впевнені, що хочете видалити цю статтю?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/articles?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default DeleteButton