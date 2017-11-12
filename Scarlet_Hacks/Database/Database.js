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
    static setLocation(userId,start,end) {

        let userMobilePath = "/pending/" +userId;
        var def = "3300 S Federal St, Chicago, IL 60616";
        if (end == '' || start == 'My Location'){
           end = def;
        }
        if (start == '' || start == 'My Location'){
            start = def;
        }
        return firebase.database().ref(userMobilePath).set({
            End: end,
            Start: start
        })

    }

}

module.exports = Database;