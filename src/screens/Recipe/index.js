import { Sidebar } from "../../components/Sidebar";
import { BreadCrumbsMenu } from "../../components/Breadcrumbs";
import { ModalRecipe } from "./components/Modal";
import RecipeDatatable from "./components/RecipeDatatable";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { addDoc, collection, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useQuery, useQueryClient } from "react-query";
import { getRecipeList } from "../../api/api";
import Swal from "sweetalert2";
import { Loading } from "../../components/loading";

export default function Recipe() {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetched, isFetching } = useQuery({
    queryKey: "recipeLists",
    queryFn: getRecipeList,
  });
  console.log([isLoading, isFetched, isFetching]);
  const [recipeId, setRecipeId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [price, setPrice] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [receipeBy, setRecipeBy] = useState("");

  const handleClose = () => {
    setOpenModal(false);
    resetForm();
  };

  const handleOpen = ({ id = null }) => {
    setRecipeId(id);
    setOpenModal(true);
  };

  const resetForm = () => {
    setRecipeName("");
    setPrice("");
    setCookingTime("");
    setImageUrl("");
    setRecipeBy("");
  };

  const handleEditForm = (id) => {
    let row = data.find((e) => e.id === id);
    if (!row) toast.error("Someting went wrong!");

    setRecipeName(row.receipe);
    setPrice(row.price);
    setCookingTime(row.cookingTime);
    setImageUrl(row.image);
    setRecipeBy(row.receipeBy);
    handleOpen({ id: id });
  };

  const handleSubmit = async () => {
    if (!recipeName || !price)
      return toast.error("Please fill all required from!");

    if (recipeId)
      return await setDoc(doc(db, "recipe_lists", recipeId), {
        recipeName: recipeName,
        price: price,
        cookingTime: cookingTime,
        imageUrl: imageUrl,
        receipeBy: receipeBy,
      })
        .then((docRef) => toast.success("Recipe updated successfully!"))
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong!");
        })
        .finally(() => {
          handleClose();
          queryClient.invalidateQueries(["recipeLists", "getList"]);
        });

    await addDoc(collection(db, "recipe_lists"), {
      recipeName: recipeName,
      price: price,
      cookingTime: cookingTime,
      imageUrl: imageUrl,
      receipeBy: receipeBy,
    })
      .then((docRef) => toast.success("Recipe created successfully!"))
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!");
      })
      .finally(() => {
        handleClose();
        queryClient.invalidateQueries(["recipeLists"]);
      });
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        return deleteDoc(doc(db, "recipe_lists", id))
          .then((docRef) => toast.success("Recipe deleted successfully!"))
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong!");
          })
          .finally(() => {
            queryClient.invalidateQueries(["recipeLists"]);
          });
    });
  };

  if (isLoading) return <Loading/>;

  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-12">
      <Toaster />
      <ModalRecipe
        openModal={openModal}
        recipeName={recipeName}
        setRecipeName={setRecipeName}
        price={price}
        setPrice={setPrice}
        cookingTime={cookingTime}
        setCookingTime={setCookingTime}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        receipeBy={receipeBy}
        setRecipeBy={setRecipeBy}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
      <Sidebar menu="recipe" />
      <div
        className="md:col-span-2 px-12 bg-gray-300 xl:col-span-10"
        style={{ minHeight: "100vh" }}
      >
        <BreadCrumbsMenu menu="Manage Recipes" />
        <div className="bg-white mt-5 rounded-md p-4">
          <div className="pt-2 mb-3 flex items-center space-x-2">
            <label className="font-bold text-2xl">Recipe lists</label>
            <svg
              onClick={handleOpen}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mb-1 text-blue-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <hr className="h-[0.5] bg-gray-100 mb-8"></hr>
          <RecipeDatatable
            data={data || []}
            handleEditForm={handleEditForm}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
