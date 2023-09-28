"use client";

import { todoProps } from "@/lib/utils";

const TodoModal = ({ data }: { data: todoProps }) => {
  console.log("****", data);
  return (
    <>
      <dialog id={`${data?.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit {data?.title || "Todo"}</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TodoModal;
