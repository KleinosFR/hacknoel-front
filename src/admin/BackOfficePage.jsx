import React from "react";

function BackOfficePage({ item }) {
    switch (item) {
        case 1:
            return <div>toto liste des eleves</div>;
        case 2:
            return <div>regex d'emargement</div>;
        default:
            return <div>il y a un problème quelque part</div>;
    }
}

export default BackOfficePage;
