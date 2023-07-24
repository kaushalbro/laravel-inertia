import React from "react";
// import { router } from "@inertiajs/react";
import { useForm, router } from "@inertiajs/inertia-react";
// import {  } from "@inertiajs/react";

function create() {
    const { data, setData, post, errors,progress } = useForm({
        name: "",
        description: "",
        brand: "",
        cost_price: "",
        selling_price: "",
        total_stock: "",
        minimum_stock: "",
        image: null,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setData("image", e.target.files[0]);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/product", {
            onSuccess: () => {
                // Redirect or do any other action on successful form submission
                console.log("success product creation");
            },
        });
    };
    return (
        <div className="container ">
            <div className="row flex-column align-items-center">
                <form
                    className="col-5 g-4"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <h1>Add new Product</h1>
                    <div className="flash-message"></div>
                    <div>
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                        <div>
                            {errors.name && (
                                <div className="error text-danger">
                                    {errors.name}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            name="description"
                            className="form-control"
                            id="description"
                            rows="3"
                            defaultValue={data.description}
                            // value={data.name}
                            onChange={handleChange}
                        >
                            
                        </textarea>
                    </div>
                    {errors.description && (
                        <div className="error text-danger">
                            {errors.description}
                        </div>
                    )}
                    <div className="col-md-12">
                        <label htmlFor="brand" className="form-label">
                            Genereic,Brand
                        </label>
                        <input
                            type="text"
                            autoComplete=""
                            className="form-control"
                            id="brand"
                            name="brand"
                            value={data.brand}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.brand && (
                        <div className="error text-danger">{errors.brand}</div>
                    )}
                    <div className="col-12">
                        <label htmlFor="cp" className="form-label">
                            Cost Price (in rs)
                        </label>
                        <input
                            name="cost_price"
                            autoComplete=""
                            type="number"
                            className="form-control"
                            id="cp"
                            value={data.cost_price}
                            placeholder="Rs 1500"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.cost_price && (
                        <div className="error text-danger">
                            {errors.cost_price}
                        </div>
                    )}
                    <div className="col-12">
                        <label htmlFor="sp" className="form-label">
                            Selling Price (in rs)
                        </label>
                        <input
                            name="selling_price"
                            type="number"
                            autoComplete=""
                            className="form-control"
                            id="sp"
                            value={data.selling_price}
                            placeholder="Rs 1500"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.selling_price && (
                        <div className="error text-danger">
                            {errors.selling_price}
                        </div>
                    )}
                    <div className="col-12">
                        <label htmlFor="total_stock" className="form-label">
                            Total stock
                        </label>
                        <input
                            name="total_stock"
                            autoComplete=""
                            type="number"
                            className="form-control"
                            id="total-stock"
                            value={data.total_stock}
                            placeholder="Rs 1500"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.total_stock && (
                        <div className="error text-danger">
                            {errors.total_stock}
                        </div>
                    )}
                    <div className="col-12">
                        <label htmlFor="minimum-stock" className="form-label">
                            Minimum Stock
                        </label>
                        <input
                            name="minimum_stock"
                            type="number"
                            autoComplete=""
                            className="form-control"
                            id="minimum-stock"
                            placeholder="Rs 1500"
                            value={data.minimum_stock}

                            onChange={handleChange}
                        />
                    </div>
                    {errors.minimum_stock && (
                        <div className="error text-danger">
                            {errors.minimum_stock}
                        </div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">
                            Product image
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            id="img"
                            name="image"
                            onChange={handleFileChange}
                        />
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    </div>
                    {errors && errors.image && (
                        <div className="error text-danger">{errors.image}</div>
                    )}

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Add new Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default create;
