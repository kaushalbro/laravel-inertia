import Dashboard from "@/Components/Dashboard/Dashboard";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import "./MainDashboard.css";
import DataTable from 'datatables.net-dt';
// import 'datatables.net-responsive-dt';

export default function MainDashboard({ classname, auth, products }) {
   let table=  new DataTable('#product_table', {
        });
    return (
        <Dashboard>
         
         <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
            }   
        >
            <Head title="Dashboard" />
            {auth.user && (
                <Link
                    className="btn btn-primary my-2"
                    href={route("product.create")}
                >
                    Create Product
                </Link>
            )}

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
                                        <img
                                            src={product.image}
                                            alt="image"
                                            style={{
                                                height: "50px",
                                                width: "75px",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        {/* <InertiaLink
                                        // href={route("product.index")}
                                    /> */}

                                        <a
                                            className="p-2"
                                            href={route(
                                                "product.edit",
                                                product.id
                                            )}
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </a>

                                        <Link
                                            href={route(
                                                "product.delete",
                                                product.id
                                            )}
                                            method="delete"
                                            as="button"
                                            type="button"
                                        >
                                            <i className="text-danger fa-solid fa-trash"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            
        </AuthenticatedLayout>
      
        </Dashboard>
    );
}
