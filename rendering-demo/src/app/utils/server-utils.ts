import "server-only"


export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        use environment variables,
        process confidential information`
    );
    return "server result"
}