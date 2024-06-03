import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"

async function getProductId(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if(!product) {
        notFound()
    }
    return product
}

export default async function EditProductsPage({ params }: { params: { id: string } }) {

    const product = await getProductId(+params.id)
    return (
        <>
            <Heading>Editar Productos: {product.name}</Heading>
            <GoBackButton/>
            <EditProductForm>
                <ProductForm 
                    product = {product}
                />
            </EditProductForm>
        </>
    )
}