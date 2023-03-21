export function Card({ title, cookingTime, recipeBy, image }) {
  return (
    <div className="rounded-lg relative bg-white shadow-md">
      <img
        className="overflow-hidden h-40 w-full object-cover rounded-t-lg"
        alt={title}
        src={
          image
            ? image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dM2rpp1m8GOXl9CEKJ5KrQEA7-2ihbmRFg&usqp=CAU"
        }
      />
      <div className="m-4 pb-4">
        <span className="font-bold">{title}</span>
        <span className="block text-gray-500 text-sm">
          Recipe By {recipeBy}
        </span>
      </div>
      <div className="absolute top-0 ml-1 p-1 mt-1 bg-gray-200 text-white-200 text-xs uppercase font-bold rounded-full">
        <svg
          className="inline-block w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>{cookingTime}</span>
      </div>
    </div>
  );
}
