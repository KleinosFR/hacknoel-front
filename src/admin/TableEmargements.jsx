import React, { useState, useEffect } from "react";

import { Table, Icon } from "react-materialize";
import { faCheck, faHandMiddleFinger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

import "./admin.css";

function Emargements() {
    const [users, setUsers] = useState([]);
    const [signs, setSigns] = useState([]);

    useEffect(() => {
        Axios.get("http://82.64.46.169:8001/users")
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        Axios.get("http://82.64.46.169:8001/signs")
            .then(res => {
                setSigns(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Table className="responsive">
                <caption>Feuille d'émargement hebdomadaire</caption>
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
                                    <img src={signs.image} />
                                </td>
                                <td>
                                    <img src={signs.image} />
                                </td>

                                <td>
                                    <img src={signs.image} />
                                </td>
                                <td>
                                    <img src={signs.image} />
                                </td>

                                <td>
                                    <img src={signs.image} />
                                </td>
                                <td>
                                    <img src={signs.image} />
                                </td>

                                <td>
                                    <img src={signs.image} />
                                </td>
                                <td>
                                    <img src={signs.image} />
                                </td>

                                <td>
                                    <img src={signs.image} />
                                </td>
                                <td>
                                    <img src={signs.image} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
export default Emargements;
