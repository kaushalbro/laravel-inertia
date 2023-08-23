import React from "react";
import { Head, Link ,useForm} from "@inertiajs/react";

import Dashboard from "@/Components/Dashboard/Dashboard";

function create() {
    const { data, setData, post, reset, errors, progress } = useForm({
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
        post(route("product.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                console.log(errors);
            },
        });
    };
    return (
        <Dashboard>
            <div className="card card-primary">
            <Link href="/dashboard" className="btn btn-secondary w-20 my-1">Go back</Link>    
                <div className="card-header my-0">
                    <h3 className="card-title">Create New Product</h3>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div className="card-body row my-0">
                        <div className="form-group col-12 my-1">
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
                        <div className="form-group col-12 my-0">
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
                            ></textarea>
                        </div>
                        {errors.description && (
                            <div className="error text-danger">
                                {errors.description}
                            </div>
                        )}
                        <div className="form-group col-12 my-1">
                            <label htmlFor="brand" className="form-label">
                                Genereic, Brand
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
                            <div className="error text-danger">
                                {errors.brand}
                            </div>
                        )}
                        <div className="form-group col-3">
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
                        <div className="form-group col-3">
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
                        <div className="form-group col-3">
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
                        <div className="form-group col-3">
                            <label
                                htmlFor="minimum-stock"
                                className="form-label"
                            >
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

                        <div className="form-group col-12">
                            <label htmlFor="exampleInputFile">
                                Product Image
                            </label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="img"
                                        name="image"
                                        onChange={handleFileChange}
                                    />
                                    <label
                                        className="custom-file-label"
                                        htmlFor="exampleInputFile"
                                    >
                                        Choose product image
                                    </label>
                                </div>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        Upload
                                    </span>
                                </div>
                                {progress && (
                                    <progress
                                        value={progress.percentage}
                                        max="100"
                                    >
                                        {progress.percentage}%
                                    </progress>
                                )}
                            </div>
                        </div>
                        {errors && errors.image && (
                            <div className="error text-danger">
                                {errors.image}
                            </div>
                        )}
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer">
                        <button
                            type="submit"
                            className="btn btn-primary bg-primary w-100"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
}

export default create;
