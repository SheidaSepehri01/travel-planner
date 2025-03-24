import clsx from "clsx";

export const VerticalPagination = (props: {
  count: number;
  activeIndex: number;
  onClick: (index: number) => void;
}) => {
  const { count, activeIndex, onClick } = props;
  const pageArray = Array(count)
    .fill(0)
    .map((_, index) => index);
  return (
    <div
      className={`flex flex-col gap-4 w-10 h-screen justify-center items-center sticky top-0 left-2 z-50 `}
    >
      {pageArray.map((number) => (
        <div
          onClick={() => onClick(number)}
          key={number}
          className={clsx(
            "!bg-black  rounded-full hover:w-3 hover:h-3 transition-all duration-300",
            activeIndex === number ? "h-3 w-3" : "h-1 w-1"
          )}
        ></div>
      ))}
    </div>
  );
};
