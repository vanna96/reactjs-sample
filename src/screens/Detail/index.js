import { Sidebar } from "../../components/Sidebar";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

export default function Detail() {
  var recipe = null;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { recipeId } = useParams();

  queryClient.getQueryData(["getList"])?.find((e) => {
    e?.items.find((i) => {
      if (i.id.toString() === recipeId.toString()) {
        recipe = i;
      }
    });
  });

  if (!recipe) return <Navigate to="/not-found"></Navigate>;

  return (
    <div>
      <div className="grid md:grid-cols-3 xl:grid-cols-12">
        <Sidebar />
        <div className="md:col-span-2 px-12 bg-gray-300 xl:col-span-10 min-h-screen">
          <div className="flex mt-16 items-center space-x-6">
            <div onClick={() => navigate(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-10 bg-white rounded-md h-[85vh] p-5">
            <div className="grid grid-cols-5">
              <div className="col-span-2">
                <img
                  src={recipe?.image}
                  className="rounded-md object-cover w-full overflow-hidden h-96"
                ></img>
              </div>
              <div className="col-span-3 ml-8">
                <h1 className="text-4xl font-semibold">{recipe?.title}</h1>
                <div className="flex space-x-1 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>
                    {recipe?.cooking}{" "}
                    <span className=" text-gray-500 text-md">
                      , Reipe By {recipe?.recipe_by}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* <div>3</div>
            <div>4</div>
            <div>5</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
