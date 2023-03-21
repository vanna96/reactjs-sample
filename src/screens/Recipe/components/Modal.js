import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

export const ModalRecipe = ({
  openModal,
  handleClose,
  handleSubmit,
  recipeName,
  setRecipeName,
  price,
  setPrice,
  cookingTime,
  setCookingTime,
  imageUrl,
  setImageUrl,
  receipeBy,
  setRecipeBy,
  handleDelete
}) => {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { marginBottom: 3 },
        }}
        autoComplete="off"
        className="static z-50"
      >
        <div className="bg-white min-h-[300px] w-[90%] mt-[40%] md:mt-[10%] lg:w-[30%] xl:w-[40%] md:w-[40%] rounded-lg mx-auto p-5 text-center">
          <h2 className="text-2xl text-black font-bold text-left mb-8">
            Create Recipe
          </h2>
          <div className="grid grid-cols-2">
            <TextField
              fullWidth
              required
              id="name"
              label="Recipe Name"
              type="text"
              placeholder="Recipe Name"
              size="small"
              autoComplete="off"
              className="pr-3"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2">
            <TextField
              fullWidth
              required
              id="price"
              label="Price"
              type="number"
              placeholder="Price"
              size="small"
              autoComplete="off"
              className="pr-3"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex space-x-6">
            <TextField
              fullWidth
              id="cookingTime"
              label="Cooking Time"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="number"
              placeholder="Cooking Time"
              size="small"
              autoComplete="off"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            />
            <TextField
              fullWidth
              id="recipeBy"
              label="Recipe By"
              type="text"
              placeholder="Recipe By"
              size="small"
              autoComplete="off"
              value={receipeBy}
              onChange={(e) => setRecipeBy(e.target.value)}
            />
          </div>
          <TextField
            fullWidth
            id="image"
            label="Image URL"
            type="text"
            placeholder="Image URL"
            size="small"
            autoComplete="off"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <div className="space-x-3 text-right">
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              variant="contained"
              className="bg-red-500"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
