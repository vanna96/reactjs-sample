import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Card } from "./components/Card";
import { useQuery } from "react-query";
import { getHomeRecipeList } from "../../api/api";
import { AuthenticationMenu } from "../../components/AuthenticationMenu";
import { Loading } from "../../components/loading";
import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

export default function Home() {
  const ref = useRef(null);
  const location = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: "getList",
    queryFn: getHomeRecipeList,
    initialData: [],
  });

  useEffect(() => ref.current.continuousStart(), [ref]);
  useEffect(() => ref.current.complete(), [location]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <LoadingBar ref={ref} />
      <div className="grid md:grid-cols-3 xl:grid-cols-12">
        <Sidebar menu="home" />
        <div className="md:col-span-2 px-12 bg-gray-300 xl:col-span-10 min-h-screen">
          <AuthenticationMenu />
          <h1 className="text-4xl font-semibold mt-4">Recipes</h1>
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className="mt-5 font-semibold text-gray-500 mb-3">
                    {item.label}
                  </h1>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-6">
                    {item?.items?.map((detail) => (
                      <Link to={`recipe/${detail.id}`} key={detail.id}>
                        <Card
                          key={detail.id}
                          title={detail.title}
                          cookingTime={detail.cooking}
                          recipeBy={detail.recipe_by}
                          image={detail.image}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
