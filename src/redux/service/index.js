export function GetDataFromServer(apiPath, reqMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    // if(window.localStorage.userLoginToken !== undefined){
    //   myHeaders.append('Authorization', 'Bearer '+window.localStorage.userLoginToken);
    // }
    // if(window.localStorage.bazruserid !== undefined){
    //   myHeaders.append('bazruserid', window.localStorage.bazruserid);
    // }


    if (!reqMethod && reqMethod !== "POST") {
        return fetch(apiPath, { method: 'GET', headers: myHeaders })

    } else {
        if (formBody) {
            let fetchData = {
                method: 'POST',
                body: JSON.stringify(formBody),
                headers: myHeaders
            }
            // Create our request constructor with all the parameters we need
            // var request = new Request(apiPath, {
            //     method: 'POST',
            //     body: formBody,
            //     headers: new Headers()
            // });
            //return fetch(request);
            return fetch(apiPath, fetchData);
        }
    }
}

// below service call is used only for posting a new item,
// for posting a new item we're using formData for whihc we should not send the headers
// and the request body shoudl be form data.
export function GetDataFromServerToPost(apiPath, reqMethod, formBody) {
    let myHeaders = new Headers();
    // if(window.localStorage.userLoginToken !== undefined){
    //   myHeaders.append('Authorization', 'Bearer '+window.localStorage.userLoginToken);
    // }

    myHeaders.append('Content-Type', 'application/json');
    if (formBody) {
        let fetchData = {
            method: 'POST',
            body: formBody,
            headers: myHeaders
        }
        return fetch(apiPath, fetchData);
    }
}

export function deleteTodoAPI(formBody) {
    console.log("FORM BODY" + JSON.stringify(formBody))
    let myHeaders = new Headers();


    myHeaders.append('Content-Type', 'application/json');
    return fetch('http://18.222.167.189:5000/delete-project', {
        method: 'DELETE',
        body: JSON.stringify(formBody),
        headers: myHeaders
    })
        .then(res => res.json())

}