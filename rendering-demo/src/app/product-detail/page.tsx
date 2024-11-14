import { Suspense } from "react"

import { Product } from "@/app/components/product"
import { Reviews } from "@/app/components/reviews"

export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product detail page</h1>
            <Suspense fallback={<p>Loading Product...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Reviews...</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}