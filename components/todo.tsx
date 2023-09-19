import { todoProps } from "@/lib/constants";

export const Todo = ({
  todo,
  key,
}: {
  todo: todoProps;
  key?: number | string;
}) => {
  if (!todo) {
    return;
  }

  const color =
    todo?.category === "Programming"
      ? "badge-primary"
      : todo?.category === "Household"
      ? "badge-secondary"
      : todo?.category === "Reading"
      ? "badge-accent"
      : "";

  const styles = `badge ${color} badge-outline`;

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-1/3" data-theme="cupcake">
      <div className="card-body">
        <h2 className="card-title">{todo?.title}</h2>
        <div className="flex flex-row justify-start items-center space-x-3">
          <div className={styles}>{todo?.category}</div>
          <input
            type="checkbox"
            checked={todo?.isFinished}
            className="checkbox"
          />
        </div>
        <p>{todo?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
