import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalState } from "../GlobalState";

function AddFoods() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [categories] = state.categoryAPI.categories;
  const [foods] = state.allFoodAPI.allfoods;
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [callback, setCallback] = state.allFoodAPI.callback;
  const [onEdit, setOnEdit] = useState(false);
  const [id, setId] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      foods.forEach((food) => {
        if (food._id === params.id) {
          setOnEdit(true);
          setId(food._id);
          setName(food.name);
          setPrice(food.price);
          setDescription(food.description);
          setImage(food.images);
          setCategory(food.category);
          setFeatured(food.featured);
          setStatus(food.status);
        }
      });
    } else {
      setOnEdit(false);
      setId("");
      setName("");
      setPrice();
      setDescription("");
      setImage(false);
      setCategory("");
      setFeatured(false);
      setStatus(true);
    }
  }, [params.id, foods]);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setLoading(false);
      setImage(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "/api/destroy",
        { public_id: image.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImage(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  const styleUpload = {
    display: image ? "block" : "none",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        await axios.put(
          `/api/food/${id}`,
          {
            name: name,
            category: category,
            images: image,
            price: price,
            description: description,
            status: status,
            featured: featured,
          },
          { headers: { Authorization: token } }
        );
        setCallback(!callback);
        history.push("/foodlist");
        toast.warn("Update Food");
      } else {
        await axios.post(
          "/api/food",
          {
            name: name,
            category: category,
            images: image,
            price: price,
            description: description,
            status: status,
            featured: featured,
          },
          { headers: { Authorization: token } }
        );
        setCallback(!callback);
        history.push("/foodlist");
        toast.success("Created Food");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="row flex-column-reverse flex-lg-row my-4">
        <div className="col-md-12 col-lg-6">
          <form className="border p-3 my-3">
            <h3 className="text-center my-2 pb-3">Create Food</h3>
            <div className="mb-4">
              <label className="form-label">Food Name</label>
              <input
                className="form-control"
                placeholder="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <label className="form-label">Category</label>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              value={category}
            >
              <option selected>select category</option>
              {categories &&
                categories.map((cat) => (
                  <option value={cat.name}>{cat.name}</option>
                ))}
            </select>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="form-label">Price</label>
              <input
                className="form-control"
                placeholder="price"
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="form-check-inline mb-2">
              <label className="form-label">Featured: </label>
              <div className="form-check form-check-inline mx-4">
                <input
                  className="form-check-input"
                  type="radio"
                  value={featured}
                  checked={featured === true}
                  onChange={() => {
                    setFeatured(true);
                  }}
                />
                <label className="form-check-label" for="inlineRadio1">
                  True
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={featured === false}
                  value={featured}
                  onChange={() => {
                    setFeatured(false);
                  }}
                />
                <label className="form-check-label" for="inlineRadio2">
                  False
                </label>
              </div>
            </div>
            <br />
            <div className="form-check-inline">
              <label className="form-label">Status: </label>
              <div className="form-check form-check-inline mx-4">
                <input
                  className="form-check-input"
                  type="radio"
                  value={state}
                  checked={status === true}
                  onChange={() => {
                    setStatus(true);
                  }}
                />
                <label className="form-check-label" for="inlineRadio1">
                  True
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value={state}
                  checked={status === false}
                  onChange={() => {
                    setStatus(false);
                  }}
                />
                <label className="form-check-label" for="inlineRadio2">
                  False
                </label>
              </div>
            </div>
            <br />
            <div className="text-center mx-auto">
              <button
                onClick={handleSubmit}
                className="btn btn-secondary my-2 px-3 py-2"
              >
                {onEdit ? "Update Food" : "Save Food"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-12 col-lg-6 my-3">
          <div className="upload">
            <input
              type="file"
              name="file"
              id="file_up"
              onChange={handleUpload}
            />
            {loading ? (
              "Uploading..."
            ) : (
              <div id="file_img" style={styleUpload}>
                <img src={image ? image.url : ""} alt="" />
                <span onClick={handleDestroy}>X</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFoods;
