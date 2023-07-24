import React from "react";
// import { router } from "@inertiajs/react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { router } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

function edit({ product }) {
    const { component, props } = usePage();
    const { data, setData, patch, processing, errors } = useForm({
        name: product.name,
        description: product.description,
        brand: product.brand,
        cost_price: product.cost_price,
        selling_price: product.selling_price,
        total_stock: product.total_stock,
        minimum_stock: product.minimum_stock,
        image: "",
    });

    const handleFileChange = (e) => {
        setData("image", e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(errors);
        console.log(component,props);
        patch(`/product/${product.id}`, {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => console.log("success message", props),
        });
    };
    return (
        <div className="container ">
            <div className="row flex-column align-items-center">
                <form
                    className="col-5 g-4"
                    onSubmit={handleSubmit}
                    // encType="multipart/form-data"
                >
                    <h1>Edit Product</h1>
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
                            onChange={(e) => setData("name", e.target.value)}
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
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        ></textarea>
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
                            onChange={(e) => setData("brand", e.target.value)}
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
                            onChange={(e) =>
                                setData("cost_price", e.target.value)
                            }
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
                            onChange={(e) =>
                                setData("selling_price", e.target.value)
                            }
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
                            onChange={(e) =>
                                setData("total_stock", e.target.value)
                            }
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
                            onChange={(e) =>
                                setData("minimum_stock", e.target.value)
                            }
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
                        {/* {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )} */}
                    </div>
                    {errors && errors.image && (
                        <div className="error text-danger">{errors.image}</div>
                    )}

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default edit;
