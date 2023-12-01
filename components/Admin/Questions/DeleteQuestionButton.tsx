"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const DeleteQuestionButton = ({ id }: ({id: String | null})) => {
  const router = useRouter();
  const removeQuestion = async () => {
    
    const confirmed = confirm("Ви впевнені, що хочете видалити це питання?");

    if (confirmed) {
      const res = await fetch(`/api/questions?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeQuestion} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default DeleteQuestionButton