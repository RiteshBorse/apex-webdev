//Generate new Apartment ID
export function generateApartId(choice , data)
{
    let detail;
    if(choice)
    {
        detail = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    }
    else 
    {
        detail = data;
    }
    let id;
    id = detail.country.charAt(0).toUpperCase();
    id += detail.state.charAt(0).toUpperCase();
    id += detail.district.charAt(0).toUpperCase();
    id += detail.apartmentName.charAt(0).toUpperCase();
    id += detail.apartmentName.slice(-1).toUpperCase();
    if(detail.flats > 99)
    {
        id += 99;
    }
    else if ( detail.flats < 10)
    {
        id += '0' + detail.flats;
    }
    else {
        id += detail.flats;
    }

    if (detail.shops > 99) {
        id += 99;
    } else if (detail.shops < 10) {
        id += '0' + detail.shops;
    } else {
        id += detail.shops;
    }

    id += detail.pincode.slice(-1);
    return id;

}
