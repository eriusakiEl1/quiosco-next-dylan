"use client"
import Logo from "@/components/ui/Logo"
import useSWR from "swr"
import styles from "../admin/orders/loader.module.css"
import { OrderWithProducts } from "@/src/types"
import LatestOrderItem from "@/components/order/LatestOrderItem"


export default function OrdersPage(){
    const url = '/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false
    })

    if(isLoading) return (
            <div className="flex justify-center items-center h-screen">
            <span className={`${styles.loader} w-20 h-20`}></span>
            </div>
        );

    if(data) return (
        <>
            <h1 className="text-center mt-20 text-6xl font-black">Oredenes Listas</h1>
            <Logo />

            {data.length ? (
                <div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (
                        <LatestOrderItem
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : <p className="text-center my-10">No Hay Ordenes Listas</p>}
        </>
    )
}