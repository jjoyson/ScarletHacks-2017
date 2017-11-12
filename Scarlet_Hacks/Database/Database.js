/**
 * @class Database
 */

import * as firebase from "firebase";

class Database {

    /**
     * Sets a users mobile number
     * @param userId
     * @param start
     * @param end
     * @returns {firebase.Promise<any>|!firebase.Promise.<void>}
     */
    static setLocation(counter,start,end) {
        var ed = "";
        var sd = "";
        if(counter == 0){
            userId = "FSMjzwoRuuglqXikL4PjodtiVQl1";
            ed = 9468.040658176746;
            sd = 9428.226220219052;
            start = "Herman Hall, il";
            end = "US Cellular Field, il";
        }
        else if(counter  == 1){
            ed = 9489.527473299331;
            sd = 10440.453474369682;
            start = "IIT Tower";
            end = "35th Street Red Hots";
            userId = "NcpnLzc03yUJN8j54c2ql6thANx2";
        }
        else{
            userId = "h9Nl3smShvXXj1dhonmfaRMk5t12";
            ed = 9449.515980468006;
            sd = 9480.557763699264;
            start = "Ed Glancy Field";
            end = "3434 S Halsted Street";
        }

        let userMobilePath = "/pending/" +userId;
/*        var s2 = "3300 S Federal St, Chicago, IL 60616";

        if (end == '' || start == 'My Location'){
           end = s2;
        }
        if (start == '' || start == 'My Location'){
            start = s2;
        }*/
        return firebase.database().ref(userMobilePath).set({
            ED:ed,
            End: end,
            SD:sd,
            Start: start
        })

    }

}

module.exports = Database;