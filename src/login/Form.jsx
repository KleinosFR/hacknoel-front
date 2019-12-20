
import React, {useState} from 'react';
import { Button, Select, Icon} from 'react-materialize';
import TextInput from 'react-materialize/lib/TextInput';
import { faPhp, faJs, faAngellist } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Form () {
const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")
const [name,setName] = useState("")
const [language,setLanguage] = useState("")

    
    return(
        <div>
            <form style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "5%"}}>
                
                <TextInput label="Prénom : " name="firstName" value={firstname} onChange={e => setFirstname(e.target.value)}/>
                <TextInput label="Nom : " name="lastName" value={lastname} onChange={e => setLastname(e.target.value)}/>
                <Select
                        onChange={e =>setName(e.target.value)}
                        options={{
                            classes: '',
                            dropdownOptions: {
                            alignment: 'left',
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            container: null,
                            coverTrigger: true,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250,
                            }
                        }}
                        value={name} >

                        <option  >

                                        Mois de début de formation :
                                    </option>
                                    <option value="Janvier">
                                        Janvier
                                    </option>
                                    <option value="Février">
                                        Février
                                    </option>
                                    <option value="Mars">
                                        Mars
                                    </option>
                                    <option value="Avril">
                                        Avril
                                    </option>
                                    <option value="Mai">
                                        Mai
                                    </option>
                                    <option value="Juin">
                                        Juin
                                    </option>
                                    <option value="Juillet">
                                        Juillet
                                    </option>
                                    <option value="Aout">
                                        Aout
                                    </option>
                                    <option value="Septembre">
                                        Septembre
                                    </option>
                                    <option value="Octobre">
                                        Octobre
                                    </option>
                                    <option value="Novembre">
                                        Novembre
                                    </option>
                                    <option value="Décembre">
                                        Décembre
                                    </option>
            </Select>
            <Select
                        onChange={e =>setLanguage(e.target.value)}
                        options={{
                            classes: '',
                            dropdownOptions: {
                            alignment: 'left',
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            container: null,
                            coverTrigger: true,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250,
                            }
                        }}
                        value={language} >

                        <option  >

                                        Language :
                                    </option>
                                    <option value="Javascript">                                       
                                        Javascript       
                                    </option>
                                    <option value="PHP">
                                        PHP
                                    </option>
                                    
            </Select>

                <Button>valider</Button>              
          </form>
        </div>
    );
}

export default Form;
