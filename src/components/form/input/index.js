export default function Input(props) {
    return (
        <div className="mt-2 mr-2 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" htmlFor="school">
                {props?.label}
            </label>
            <input
                value={props?.value}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={props?.type}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    )
}