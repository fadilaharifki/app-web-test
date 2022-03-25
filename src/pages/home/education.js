import { useDispatch } from "react-redux";
import { setEducation, removeEducation } from "../../redux/actions/data";
import Button from "../../components/form/button";
import Input from "../../components/form/input";

export default function Education({ data, index }) {
    const dispatch = useDispatch()
    return (
        <>
            <Button type="button" onClick={() => dispatch(removeEducation(index))} color={"red"} label={"Remove"} />
            <div className="flex flex-row w-full">
                <Input
                    label={"school"}
                    value={data?.school || ""}
                    type={"text"}
                    placeholder={'school'}
                    onChange={(e) => {
                        const obj = { ...data }
                        obj.school = e.target.value

                        dispatch(setEducation(obj, index))
                    }}
                />
                <Input
                    label={"major"}
                    value={data?.major || ""}
                    type={"text"}
                    placeholder={'major'}
                    onChange={(e) => {
                        const obj = { ...data }
                        obj.major = e.target.value

                        dispatch(setEducation(obj, index))
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

                        dispatch(setEducation(obj, index))
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

                        dispatch(setEducation(obj, index))
                    }}
                />
            </div>
        </>
    )
}