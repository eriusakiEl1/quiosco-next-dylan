import React from "react";
import { prisma } from "@/src/lib/prisma";
import ProductCard from "@/components/products/ProductCard";
import Heading from "@/components/ui/Heading";
import LoginButton from "@/components/login/LoginButton";

async function getProducts(category: string) {
    const products = await prisma.product.findMany({
        where: {
            category:{
                slug: category
            }
        }
    })

    return products
}

export default async function OrderPage({params}: { params: { category : string }}) {
    const products = await getProducts(params.category)

    return (
      <>
        <nav className="flex justify-between items-center">
          
          <div>
            <Heading>Elige y personaliza tu pedido</Heading>
          </div>
          <div>
            <LoginButton />
          </div>
        </nav>

        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
}