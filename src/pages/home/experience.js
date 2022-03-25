import { useDispatch } from "react-redux";
import { setExperience, removeExperience } from "../../redux/actions/data";
import Button from "../components/form/button";
import Input from "../components/form/input";

export default function Experience({ data, index }) {
    const dispatch = useDispatch()
    return (
        <>
            <Button type="button" onClick={() => dispatch(removeExperience(index))} color={"red"} label={"Remove"} />
            <div className="flex flex-row w-full">
                <Input
                    label={"company"}
                    value={data?.company || ""}
                    type={"text"}
                    placeholder={'company'}
                    onChange={(e) => {
                        const obj = { ...data }
                        obj.company = e.target.value

                        dispatch(setExperience(obj, index))
                    }}
                />
                <Input
                    label={"title"}
                    value={data?.title || ""}
                    type={"text"}
                    placeholder={'title'}
                    onChange={(e) => {
                        const obj = { ...data }
                        obj.title = e.target.value

                        dispatch(setExperience(obj, index))
                    }}
                />
            </div>
            <div className="flex flex-row w-full">
                <Input
                    label={"Start Date"}
                    value={data?.start_date || ""}
                    type={"date"}
                    placeholder={'start_date'}
                    onChange={(e) => {
                        const obj = { ...data }
                        obj.start_date = e.target.value

                        dispatch(setExperience(obj, index))
                    }}
                />
                <Input
                    label={"End Date"}
                    value={data?.end_date || ""}
                    type={"date"}
                    placeholder={'end_date'}
                    onChange={(e) => {
                        const obj = { ...data }
                        obj.end_date = e.target.value

                        dispatch(setExperience(obj, index))
                    }}
                />
            </div>
        </>
    )
}