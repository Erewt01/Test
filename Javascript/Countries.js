function addCountry(countryName,capitalName) {
        countrysH[countryName]=capitalName;
    }

    function deleteCountry(countryName) {
        delete countrysH[countryName];
    }

    function getCountryInfo(countryName) {
        if ( countryName in countrysH )
            alert( 'Страна: ' + countryName + ' Столица: ' + countrysH[countryName]) ;
        else
            alert ('нет информации о стране ' + countryName + '!') ;
    }

    function listCountrys() {
        var res="";
        for ( var CN in countrysH )
            res+='\n'+getCountryInfo(CN);
        return res;
    }