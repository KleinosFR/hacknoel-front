import React, { useState, useEffect } from "react";

import { Table, Icon } from "react-materialize";
import { faCheck, faHandMiddleFinger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

function Tableau() {
    const [users, setUsers] = useState([]);
    const [signs, setSigns] = useState([]);

    useEffect(() => {
        Axios.get("http://82.64.46.169:8001/users").then(res => {
            setUsers(res.data);
        });
    }, []);

    useEffect(() => {
        Axios.get("http://82.64.46.169:8001/signs").then(res => {
            setSigns(res.data);
        });
    }, []);

    return (
        <>
            <Table className="responsive">
                <thead>
                    <tr>
                        <th colspan="2" className="center-align"></th>
                        <th colspan="2" className="center-align">
                            Lundi
                        </th>
                        <th colspan="2" className="center-align">
                            {" "}
                            Mardi
                        </th>
                        <th colspan="2" className="center-align">
                            Mercredi
                        </th>
                        <th colspan="2" className="center-align">
                            Jeudi
                        </th>
                        <th colspan="2" className="center-align">
                            Vendredi
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th colspan="1" className="center-align">
                            Nom
                        </th>
                        <th colspan="1" className="center-align">
                            Prénom
                        </th>
                        <th>AM</th>
                        <th>PM</th>
                        <th>AM</th>
                        <th>PM</th>
                        <th>AM</th>
                        <th>PM</th>
                        <th>AM</th>
                        <th>PM</th>
                        <th>AM</th>
                        <th>PM</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr>
                                <td className="center-align">
                                    {user.lastName}
                                </td>
                                <td className="center-align">
                                    {user.firstName}
                                </td>

                                <td>
                                    <Icon>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Icon>
                                </td>
                                <td>
                                    <Icon>
                                        <FontAwesomeIcon
                                            icon={faHandMiddleFinger}
                                        />
                                    </Icon>
                                </td>

                                <td>
                                    <Icon>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Icon>
                                </td>
                                <td>
                                    <Icon>
                                        <FontAwesomeIcon
                                            icon={faHandMiddleFinger}
                                        />
                                    </Icon>
                                </td>

                                <td>
                                    <Icon>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Icon>
                                </td>
                                <td>
                                    <Icon>
                                        <FontAwesomeIcon
                                            icon={faHandMiddleFinger}
                                        />
                                    </Icon>
                                </td>

                                <td>
                                    <Icon>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Icon>
                                </td>
                                <td>
                                    <Icon>
                                        <FontAwesomeIcon
                                            icon={faHandMiddleFinger}
                                        />
                                    </Icon>
                                </td>

                                <td>
                                    <Icon>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Icon>
                                </td>
                                <td>
                                    <Icon>
                                        <FontAwesomeIcon
                                            icon={faHandMiddleFinger}
                                        />
                                    </Icon>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
export default Tableau;
