/**
 * This function takes in parameters for a product ID and review ID and displays a heading with the
 * corresponding values.
 * @param  - The ReviewDetail function takes a single object as its argument, which has a nested
 * `params` object. The `params` object contains two properties: `productId` of type string and
 * `reviewId` of type string.
 * @returns A React functional component named ReviewDetail is being returned. This component takes a
 * destructured object as a parameter with a nested params object containing productId and reviewId
 * properties. The component renders an h1 element displaying the reviewId and productId values.
 */
export default function ReviewDetail ({ params } : {
     params: {
         productId: string 
         reviewId: string
        } 
    }) {
    return <h1> Review {params.reviewId} for product {params.productId}</h1>
}