import { useDispatch, useSelector } from "react-redux"
import { addEducation, addExperience, postDataUser, setUser } from "../../redux/actions/data";
import Button from "../components/form/button";
import Input from "../components/form/input";
import Education from "./education";
import Experience from "./experience";

export default function Home() {
    const dispatch = useDispatch()
    const { user, education, experience } = useSelector((state) => state.data)
    // console.log(user, 'user');
    // console.log(education, 'education');
    // console.log(experience, 'experience');
    return (
        <div className="m-10">
            <div className="border-2 p-5 rounded-lg">
                <div className="block text-gray-700 text-sm font-bold mb-2 uppercase">Basic Informasi</div>
                <div>
                    <Input
                        label={"fullname"}
                        value={user?.fullname || ""}
                        type={"text"}
                        placeholder={'fullname'}
                        onChange={(e) => {
                            const obj = { ...user }
                            obj.fullname = e.target.value
                            dispatch(setUser(obj))
                        }}
                    />
                    <Input
                        label={"email"}
                        value={user?.email || ""}
                        type={"email"}
                        placeholder={'email'}
                        onChange={(e) => {
                            const obj = { ...user }
                            obj.email = e.target.value
                            dispatch(setUser(obj))
                        }}
                    />
                    <Input
                        label={"phone"}
                        value={user?.phone || ""}
                        type={"number"}
                        placeholder={'phone'}
                        onChange={(e) => {
                            const obj = { ...user }
                            obj.phone = e.target.value
                            dispatch(setUser(obj))
                        }}
                    />
                </div>
            </div>
            <div className="border-2 p-5 mt-5 rounded-lg">
                <div className="flex flex-row justify-between">
                    <div className="block text-gray-700 text-sm font-bold mb-2 uppercase">Education</div>
                </div>
                {
                    education.map((e, i) => {
                        return (
                            <div key={i} className="border-2 p-5 mt-5 rounded-lg">
                                <Education data={e} index={i} />
                            </div>
                        )
                    })
                }
                <Button type="button" onClick={() => dispatch(addEducation({}))} color={"green"} label={"Add Education"} />
            </div>

            <div className="border-2 p-5 mt-5 rounded-lg">
                <div className="flex flex-row justify-between">
                    <div className="block text-gray-700 text-sm font-bold mb-2 uppercase">Experience</div>
                </div>
                {
                    experience.map((e, i) => {
                        return (
                            <div key={i} className="border-2 p-5 mt-5 rounded-lg">
                                <Experience data={e} index={i} />
                            </div>
                        )
                    })
                }
                <Button type="button" onClick={() => dispatch(addExperience({}))} color={"green"} label={"Add Experiance"} />
            </div>
            <Button type="button" onClick={() => dispatch(postDataUser(user, education, experience))} color={"green"} label={"Save"} />
        </div >
    )
}