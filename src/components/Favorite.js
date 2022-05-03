import useToggler from "../custom_hooks/useToggler"

export default function Favorite() {
    const [isFavorited, toggle] = useToggler(false)
    
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span 
                    onClick={toggle}
                >
                    {isFavorited ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    ) 
}
