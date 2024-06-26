"use client";
import { ProductCategoryForm } from "@/components/pages/product-categories/form";

const CreateProductCategory = () => {
    return (
        <section>
            <h1 className="mb-6 text-2xl font-medium">Create Product Category</h1>
            <div className="flex">
                <div className="w-full">
                    <ProductCategoryForm />
                </div>
            </div>
        </section>
    );
};

export default CreateProductCategory;
