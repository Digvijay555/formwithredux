import React, { useState } from "react"
import { useSelector } from "react-redux"
const Show = () => {
    const record = useSelector((state) => state.saveReducer)
    console.log("saveReducer", record)
    return (
        <div>
            {
                record.length === 0 ?
                    null
                    :
                    <>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>

                            {
                                record.map((val, key) => {
                                    return (
                                        <tr>
                                            <td>{val.name}</td>
                                            <td>{val.email}</td>
                                            <td>{val.password}</td>
                                        </tr>
                                    )
                                })
                            }

                        </table>
                    </>
            }

        </div>
    )
}

export default Show