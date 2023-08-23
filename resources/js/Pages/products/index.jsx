import React from "react";
import { Link } from "@inertiajs/inertia-react";

function index({ products, auth }) {
    return (
        <div className="container">
            {(auth.user && (
                <Link href={route("dashboard")} as="button" type="button">
                    <h1 className="btn btn-primary my-3">Link to dashBoard</h1>
                </Link>
            )) || (
                <div className="container">
                    <Link href={route("dashboard")} as="button" type="button">
                        <h1 className="btn btn-primary my-3">Login in</h1>
                    </Link>
                    <Link href={route("register")} as="button" type="button">
                        <h1 className="btn btn-primary my-3 mx-2">Register</h1>
                    </Link>
                </div>
            )}
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
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
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
                                    <img
                                        src={product.image}
                                        alt="image"
                                        style={{
                                            height: "50px",
                                            width: "75px",
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default index;
