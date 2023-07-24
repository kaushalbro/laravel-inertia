import React from "react";
import { Head, usePage, Link, InertiaLink } from "@inertiajs/inertia-react";
import { Inertia, route } from "@inertiajs/inertia";
import { router } from "@inertiajs/react";

function index({ products }) {
    // const { url } = usePage();

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            // router.visit(id, { method: "delete" });
            Inertia.delete(`/product/${id}`);
            // Inertia.delete('product.delete');
        }
    };

    return (
        <div className="container">
            <Head title="Product lists" />
            {/* <a className="btn btn-primary my-5" href={ route('product.create') }>
                Add New Product
            </a> */}
            <Link className="btn btn-primary my-5" href="/product/create">
                Create Product
            </Link>
            <div className="row flex-column align-items-center">
                <table id="product_table" className="table table-striped">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Generic,Brand</th>
                            <th>Cost Price(in Rs)</th>
                            <th>Selling price(in Rs)</th>
                            <th>total stock</th>
                            <th>min-stock</th>
                            <th>image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            // <li key={product.id}>{product.name}</li>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.brand}</td>
                                <td>{product.cost_price}</td>
                                <td>{product.selling_price}</td>
                                <td>{product.total_stock}</td>
                                <td>{product.minimum_stock}</td>
                                <td>
                                {/* <img src={ asset('storage/app/  /images/' . $product.image) } alt="Example Image" /> */}
                                </td>

                                <td>
                                    {/* <InertiaLink
                                        // href={route("product.index")}
                                    /> */}

                                    <a
                                        className="p-2"
                                        // href={ route('/product/' . product.id . '/edit') }
                                        // onClick={() => handleEdit(product.id)}
                                        href={"/product/edit/"+product.id}
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </a>

                                    <a
                                        className="delete-btn text-danger"
                                        tabIndex="-1"
                                        onClick={() => handleDelete(product.id)}
                                        // href={url(
                                        //     "product.destroy",
                                        //     product.id
                                        // )}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </a>

                                    {/* <Link href='/product/{{product.id}}' method="delete" as="button" type="button">Logout</Link> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Generic,Brand</th>
                            <th>Cost Price(in Rs)</th>
                            <th>Selling price(in Rs)</th>
                            <th>total stock</th>
                            <th>min-stock</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default index;
