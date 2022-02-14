/*
  The storeCallback takes in the Session, and sets a stringified version of it on the redis store
  This callback is used for BOTH saving new Sessions and updating existing Sessions.
  If the session can be stored, return true
  Otherwise, return false
*/
export const storeCallback = async (session) => {
  try {
    // Inside our try, we use the `setAsync` method to save our session.
    // This method returns a boolean (true if successful, false if not)
    console.log( session.id, JSON.stringify(session), "store session and id callback" )
    //return await this.client.set(session.id, JSON.stringify(session));
  } catch (err) {
    // throw errors, and handle them gracefully in your application
    throw new Error(err);
  }
}

/*
The loadCallback takes in the id, and uses the getAsync method to access the session data
 If a stored session exists, it's parsed and returned
 Otherwise, return undefined
*/
export const loadCallback = async (id) => {
  try {
    // Inside our try, we use `getAsync` to access the method by id
    // If we receive data back, we parse and return it
    // If not, we return `undefined`
    console.log("loadCallback")
    // let reply = await this.client.get(id);
    // if (reply) {
    //   return JSON.parse(reply);
    // } else {
    //   return undefined;
    // }
  } catch (err) {
    throw new Error(err);
  }
}

/*
  The deleteCallback takes in the id, and uses the redis `del` method to delete it from the store
  If the session can be deleted, return true
  Otherwise, return false
*/
export const deleteCallback = async (id) => {
  try {
    // Inside our try, we use the `delAsync` method to delete our session.
    // This method returns a boolean (true if successful, false if not)
    console.log("deleteCallback")
    // return await this.client.del(id);
  } catch (err) {
    throw new Error(err);
  }
}
