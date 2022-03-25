export default function Button({ type = "submit", color = "green", label = "Submit", ...props }) {
    return (
        <div className="flex flex-row justify-end my-5">
            <button
                type={type}
                className={`bg-${color}-600 hover:bg-${color}-700 text-white p-3 rounded-lg cursor-pointer capitalize`}
                {...props}
            >
                {label}
            </button>
        </div>
    )
}